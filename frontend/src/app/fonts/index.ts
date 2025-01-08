import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const workSans = localFont({
    src: [
        {
            path: "./WorkSans/WorkSans-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-Thin.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./WorkSans/WorkSans-ExtraLight.ttf",
            weight: "100",
            style: "normal",
        },
    ],
    variable: "--font-work-sans",
});