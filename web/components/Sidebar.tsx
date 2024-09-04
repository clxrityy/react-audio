"use client";

import Image from "next/image";
import { ICONS } from "@/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export default function Sidebar() {
    return (
        <div className="h-screen max-w-md shadow-gray-400 shadow-xl">
            <div className="flex flex-col gap-10 w-full justify-center items-centerpx-2 py-4">
                <div className="border-b shadow-gray-200 shadow-md w-full pb-4 flex justify-center">
                    <Image src={"/apple-touch-icon.png"} width={50} height={50} alt="react-audio" className="hover:invert transition-transform" />
                </div>
                <div className="flex h-full flex-col items-center justify-between gap-5 w-full">
                    {sidebarItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-start gap-2 w-full">
                            <SidebarGroup title={item.title} items={item.items} href={item.href} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export function SidebarGroup({ title, href, items }: SidebarItemProps) {


    return (
        <div className="flex flex-col w-full gap-3">
            <div className="flex items-center gap-1 bg-gray-300 py-1">
                <div className="w-6 h-6 flex items-center justify-center rounded-md">
                    <ICONS.showMore />
                </div>
                <div className="text-gray-800 text-base">
                    <Link href={href} className="font-semibold">
                        {title}
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
                {items && items.map((item, idx) => (
                    <div key={idx} className="flex items-start ml-10 text-center justify-center gap-2 flex-col w-full">
                        <SidebarItem title={item.title} href={item.href} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export function SidebarItem({ title, href }: { title: string, href: string }) {

    const [isActive, setIsActive] = useState<boolean>(false);

    const pathname = usePathname();

    useEffect(() => {
        setIsActive(pathname === href);
    }, [pathname])

    return (
        <div className="flex gap-1">
            <p className="w-6 h-6 flex items-center justify-center rounded-md">
                {isActive ? <ICONS.dotFilled /> : <ICONS.dotEmpty />}
            </p>
            <div className="text-gray-800 text-sm tracking-tightest font-semibold">
                <Link href={href}>
                    {title}
                </Link>
            </div>
        </div>
    )
}

interface SidebarItemProps {
    title: string;
    href: string;
    items?: SidebarItemProps[];
}

const sidebarItems = [
    {
        title: "Getting Started",
        href: "/",
        items: [
            {
                title: "Installation",
                href: "/installation",
                items: []
            },
            {
                title: "Usage",
                href: "/usage",
                items: []
            }
        ]
    },
    {
        title: "Components",
        href: "/components",
        items: [
            {
                title: `JustPlayer`,
                href: "/components/just-player",
                items: []
            },
            {
                title: "Waveform",
                href: "/components/waveform",
                items: []
            },
            {
                title: "AudioPlayer",
                href: "/components/audio-player",
                items: []
            },
            {
                title: "AudioLibrary",
                href: "/components/audio-library",
                items: []
            }
        ]
    }
] as SidebarItemProps[];