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
export default function Home() {
  return (

    <BackgroundRippleEffect rows={40} cols={40} cellSize={60}>
      <Navbar />
      <div className="w-full overflow-hidden" id="home">
        <MacbookScroll
          title={
            <div className="text-5xl md:text-4xl font-mono text-center">
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
                width={40}
                height={40}
                alt="logo"
              />
              <Image
                src={"/svg/typescript.svg"}
                width={40}
                height={40}
                alt="logo"
              />
            </div>
          }
          src={`/img/banner.webp`}
          showGradient={false}
        />
      </div>
      <div className="flex mt-0 md:mt-40 justify-center" id="profile">
        <Card className="flex mx-auto w-full max-w-5xl py-30 px-10 shadow-[6px_6px_0px_skyblue]">
          <CardHeader>
            <div className="flex flex-col md:flex-row flex-1 justify-between items-center gap-6">
              <Image
                src={ImageMe}
                alt="Foto Image"
                width={200}
                height={200}
                className="rounded-2xl"
              />
              <div className="flex flex-col justify-center text-center mx-auto">
                <h2 className="text-2xl font-sans">
                  MOH. NOVEL CANDRA DINATA
                </h2>
                <p className="text-muted-foreground italic">
                  HI &apos; Junior full Stack developer and Content Creator  <br />
                  I &apos; From Jawa Timur Indonesia <br /> I successfully completed both school and bootcamp.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-12 cursor-pointer mt-12">
                  <div title="Youtube" className="flex flex-col md:flex-row ">
                    <div className="flex md:flex-col lg:flex-row gap-2">
                      <Youtube className="text-red-500" />
                      <p className="mx-auto">SabcanDev</p>
                    </div>
                  </div>
                  <div
                    title="Instagram"
                    className="flex flex-col lg:flex-row"
                  >
                    <a
                      href="https://www.instagram.com/oh_my33ll?igsh=NGluYXRkaWYzdXo0"
                      className="flex md:flex-col lg:flex-row gap-2"
                    >
                      <Instagram className="bg-linear-to-tr from-yellow-500 via-purple-500 to-pink-500 bg-clip-text bg-transparent" />
                      <p className="mx-auto">oh_myv33ll</p>
                    </a>
                  </div>
                  <div
                    title="Linkedin"
                    className="flex flex-col md:flex-row "
                  >
                    <a
                      href="https://www.linkedin.com/in/novel-candra-ab6329370/"
                      className="flex md:flex-col lg:flex-row gap-2"
                      target="_blank"
                    >
                      <Linkedin className="text-blue-500" />
                      <p className="mx-auto">NovelCandra</p>
                    </a>
                  </div>
                  <div title="Twitter" className="flex flex-col md:flex-row">
                    <div className="flex md:flex-col lg:flex-row gap-2">
                      <Twitter className="text-green-400" />
                      <p className="mx-auto">NovelCandra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* SKILL */}
      <div className="mt-12 px-4 md:px-20 lg:px-40 space-x-2.5 cursor-pointer" id="skills">
        <h2 className="text-2xl font-mono">Skills mastered</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mt-12 gap-x-20 gap-y-10">
          <Card className="w-full md:w-70 lg:w-80">
            <CardContent>
              <div className="flex flex-1 gap-2.5 items-center">
                <Image src={Skillone} alt="react Js" className="h-30 w-30" />
                <p className="text-2xl font-mono">React Js</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full md:w-70 lg:w-80">
            <CardContent>
              <div className="flex flex-1 gap-2.5 items-center">
                <Image src={SkillTwo} alt="react Js" className="h-30 w-30" />
                <p className="text-2xl font-mono">Javascript</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full md:w-70 lg:w-80">
            <CardContent>
              <div className="flex flex-1 gap-2.5 items-center">
                <Image src={SkillThree} alt="react Js" className="h-30 w-30" />
                <p className="text-2xl font-mono">Typescript</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full md:w-70 lg:w-80">
            <CardContent>
              <div className="flex flex-1 gap-2.5 items-center">
                <Image src={SkillFour} alt="react Js" className="h-30 w-30" />
                <p className="text-2xl font-mono">Mysql</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full md:w-70 lg:w-80">
            <CardContent>
              <div className="flex flex-1 gap-2.5 items-center">
                <Image src={SkillFive} alt="react Js" className="h-30 w-30" />
                <p className="text-2xl font-mono">Sass</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full md:w-70 lg:w-80">
            <CardContent>
              <div className="flex flex-1 gap-2.5 items-center">
                <Image src={SkillSix} alt="react Js" className="h-30 w-30" />
                <p className="text-2xl font-mono">Tailwind</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* end SKill */}

      {/* PROJECT */}
      <div
        className="mt-12 px-4 md:py-20 md:px-10 lg:px-40 space-y-11 bg-red-500"
        id="project"
      >
        <HeroParallax products={dataProducts} />
      </div>
      <div className="mt-12">
        <FooterPage />
      </div>
      {/* End Project */}
    </BackgroundRippleEffect>
  );
}
