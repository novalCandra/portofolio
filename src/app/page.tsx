"use client";
import Navbar from "@/components/common/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";
import ImageMe from "@/assets/me.jpeg";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Skillone from "@/assets/physics.png";
import SkillTwo from "@/assets/js.png";
import SkillThree from "@/assets/typescript.png";
import SkillFour from "@/assets/mysql.png";
import SkillFive from "@/assets/sass.png";
import SkillSix from "@/assets/tailwindcss.png";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import FooterPage from "@/components/common/footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { dataProducts } from "@/components/config/products";

const socials = [
  { title: "Youtube", icon: Youtube, label: "SabcanDev", href: null, iconClass: "text-red-500" },
  {
    title: "Instagram",
    icon: Instagram,
    label: "oh_myv33ll",
    href: "https://www.instagram.com/oh_my33ll?igsh=NGluYXRkaWYzdXo0",
    iconClass: "text-pink-500",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    label: "NovelCandra",
    href: "https://www.linkedin.com/in/novel-candra-ab6329370/",
    iconClass: "text-blue-500",
  },
  { title: "Twitter", icon: Twitter, label: "NovelCandra", href: null, iconClass: "text-green-400" },
];

const skills = [
  { img: Skillone, label: "React Js", alt: "React Js" },
  { img: SkillTwo, label: "Javascript", alt: "Javascript" },
  { img: SkillThree, label: "Typescript", alt: "Typescript" },
  { img: SkillFour, label: "Mysql", alt: "Mysql" },
  { img: SkillFive, label: "Sass", alt: "Sass" },
  { img: SkillSix, label: "Tailwind", alt: "Tailwind CSS" },
];

export default function Home() {
  return (
    <BackgroundRippleEffect rows={40} cols={40} cellSize={60}>
      <Navbar />
      <div className="w-full max-w-full overflow-x-clip" id="home">
        <MacbookScroll
          title={
            <div className="px-4 text-center font-mono text-3xl text-balance sm:text-4xl lg:text-5xl">
              My Portofolio{" "}
              <span className="bg-linear-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
                NovelCandra
              </span>
            </div>
          }
          badge={
            <div className="flex gap-2 -rotate-12 transform">
              <Image
                src={"/svg/vscode.svg"}
                width={32}
                height={32}
                alt="vscode logo"
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <Image
                src={"/svg/typescript.svg"}
                width={32}
                height={32}
                alt="typescript logo"
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </div>
          }
          src={`/img/banner.webp`}
          showGradient={false}
        />
      </div>

      {/* PROFILE */}
      <div className="flex w-full justify-center px-4 sm:px-6 lg:px-8" id="profile">
        <Card className="w-full max-w-5xl px-4 py-8 shadow-[6px_6px_0px_skyblue] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <CardHeader className="px-0 sm:px-2">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
              <Image
                src={ImageMe}
                alt="Foto Image"
                width={200}
                height={200}
                className="h-36 w-36 shrink-0 rounded-2xl object-cover sm:h-44 sm:w-44 lg:h-50 lg:w-50"
              />
              <div className="flex w-full flex-1 flex-col justify-center text-center lg:text-left">
                <h2 className="text-xl font-sans font-semibold sm:text-2xl">
                  MOH. NOVEL CANDRA DINATA
                </h2>
                <p className="mt-2 text-sm text-muted-foreground italic sm:text-base">
                  HI &apos; Junior full Stack developer and Content Creator <br />
                  I &apos; From Jawa Timur Indonesia <br /> I successfully completed both school and bootcamp.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    const inner = (
                      <span className="flex items-center justify-center gap-2 lg:justify-start">
                        <Icon className={`h-5 w-5 shrink-0 ${s.iconClass}`} />
                        <span className="truncate text-sm sm:text-base">{s.label}</span>
                      </span>
                    );
                    return (
                      <div key={s.title} title={s.title} className="flex justify-center lg:justify-start">
                        {s.href ? (
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-80"
                          >
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* SKILL */}
      <div className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8" id="skills">
        <h2 className="text-xl font-mono sm:text-2xl">Skills mastered</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.label} className="w-full">
              <CardContent>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={skill.img}
                    alt={skill.alt}
                    className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                  />
                  <p className="text-xl font-mono sm:text-2xl">{skill.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* end SKill */}

      {/* PROJECT */}
      <div className="mt-8 w-full sm:mt-12" id="project">
        <HeroParallax products={dataProducts} />
      </div>
      <div className="mt-8 sm:mt-12">
        <FooterPage />
      </div>
      {/* End Project */}
    </BackgroundRippleEffect>
  );
}
