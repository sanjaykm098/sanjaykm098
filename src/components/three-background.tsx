"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

type Section = "hero" | "about" | "skills" | "projects" | "contact";

const ThreeBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const mainGroupRef = useRef<THREE.Group | null>(null);
    const energyRingRef = useRef<THREE.Mesh | null>(null);
    const [activeSection, setActiveSection] = useState<Section>("hero");

    const states = {
        hero: { pos: [0, 0, 10], rot: [0, 0, 0] },
        skills: { pos: [-5, 2, 8], rot: [0.3, 0.4, 0] },
        projects: { pos: [5, -2, 8], rot: [-0.2, -0.4, 0.2] },
        contact: { pos: [0, 0, 15], rot: [Math.PI / 2, 0, 0] },
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.04);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const mainGroup = new THREE.Group();
        scene.add(mainGroup);
        mainGroupRef.current = mainGroup;

        // --- Optimized Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);

        const spotLight1 = new THREE.SpotLight(0xff7c3c, 60);
        spotLight1.position.set(10, 10, 10);
        scene.add(spotLight1);

        const spotLight2 = new THREE.SpotLight(0x3c7cff, 60);
        spotLight2.position.set(-10, -10, 10);
        scene.add(spotLight2);

        // --- The Center Glow ---
        const glowGeom = new THREE.SphereGeometry(4, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({
            color: "#ff6c2c",
            transparent: true,
            opacity: 0.03,
        });
        const glowSphere = new THREE.Mesh(glowGeom, glowMat);
        scene.add(glowSphere);

        // --- Ultra Optimized Glass Shards ---
        const shardGeom = new THREE.IcosahedronGeometry(1, 0);
        const shardMat = new THREE.MeshStandardMaterial({
            color: "#ffffff",
            transparent: true,
            opacity: 0.2,
            roughness: 0.3,
            metalness: 0.2,
        });

        const shards: THREE.Mesh[] = [];
        for (let i = 0; i < 8; i++) {
            const shard = new THREE.Mesh(shardGeom, shardMat);
            shard.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10);
            shard.scale.setScalar(Math.random() * 0.4 + 0.2);
            shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            mainGroup.add(shard);
            shards.push(shard);
        }

        // --- Ultra Optimized Particle Cloud ---
        const pCount = 500;
        const pGeom = new THREE.BufferGeometry();
        const pPosArr = new Float32Array(pCount * 3);
        const pColors = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount; i++) {
            pPosArr[i * 3] = (Math.random() - 0.5) * 40;
            pPosArr[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pPosArr[i * 3 + 2] = (Math.random() - 0.5) * 40;

            pColors[i * 3] = 1;
            pColors[i * 3 + 1] = 0.5 + Math.random() * 0.5;
            pColors[i * 3 + 2] = 0.3;
        }
        pGeom.setAttribute("position", new THREE.BufferAttribute(pPosArr, 3));
        pGeom.setAttribute("color", new THREE.BufferAttribute(pColors, 3));
        const pMat = new THREE.PointsMaterial({ size: 0.025, vertexColors: true, transparent: true, opacity: 0.15 });
        const particles = new THREE.Points(pGeom, pMat);
        scene.add(particles);

        // --- Interaction ---
        const mouse = new THREE.Vector2();
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let rafId: number;
        const animate = () => {
            rafId = requestAnimationFrame(animate);
            const time = Date.now() * 0.0005;

            shards.forEach((s, i) => {
                s.rotation.x += 0.001;
                s.rotation.y += 0.0015;
                s.position.y += Math.sin(time + i) * 0.003;
            });

            mainGroup.rotation.y += (mouse.x * 0.03 - mainGroup.rotation.y) * 0.05;
            mainGroup.rotation.x += (-mouse.y * 0.03 - mainGroup.rotation.x) * 0.05;

            particles.rotation.y += 0.00003;
            glowSphere.scale.setScalar(1 + Math.sin(time) * 0.05);

            renderer.render(scene, camera);
        };
        animate();

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const height = window.innerHeight;
            let section: Section = "hero";
            if (scrollY > height * 2.5) section = "contact";
            else if (scrollY > height * 1.5) section = "projects";
            else if (scrollY > height * 0.5) section = "skills";

            if (activeSection !== section) {
                setActiveSection(section);
                const target = states[section];
                gsap.to(camera.position, { x: target.pos[0], y: target.pos[1], z: target.pos[2], duration: 2.5, ease: "power2.inOut" });
                gsap.to(mainGroup.rotation, { x: target.rot[0], y: target.rot[1], z: target.rot[2], duration: 2.5, ease: "power2.inOut" });
            }
        };
        window.addEventListener("scroll", handleScroll);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(rafId);
            renderer.dispose();
            shardGeom.dispose();
            shardMat.dispose();
            glowGeom.dispose();
            glowMat.dispose();
            pGeom.dispose();
            pMat.dispose();
        };
    }, [activeSection]);

    return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeBackground;
