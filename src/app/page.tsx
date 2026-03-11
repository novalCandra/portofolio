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
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import FooterPage from "@/components/common/footer";
export default function Home() {
  return (
    <>
      <BackgroundRippleEffect rows={40} cols={40} cellSize={60}>
        <Navbar />
        <div className=" max-h-2/5 overflow-hidden">
          <MacbookScroll
            title={
              <div className="text-5xl font-mono text-center">
                My Portofolio{" "}
                <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
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
        <div className="flex mt-0 md:mt-40 justify-center">
          <Card className="flex mx-auto w-300 py-10 px-10 shadow-[6px_6px_0px_skyblue]">
            <CardHeader>
              <div className="flex flex-1 justify-between">
                <Image
                  src={ImageMe}
                  alt="Foto Image"
                  width={"200"}
                  className="rounded-2xl"
                />
                <div className="flex flex-col justify-center text-center mx-auto">
                  <h2 className="text-2xl font-sans">
                    MOH. NOVEL CANDRA DINATA
                  </h2>
                  <span className="text-muted-foreground italic">
                    Sofware Engginer & Conten Creator
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-12 cursor-pointer mt-12">
                    <div
                      title="Youtube"
                      className="flex flex-col md:flex-row gap-2"
                    >
                      <Youtube className="text-red-500" />
                      <p>SabcanDev</p>
                    </div>
                    <div
                      title="Instagram"
                      className="flex flex-col md:flex-row gap-2"
                    >
                      <Instagram className="bg-gradient-to-tr from-yellow-500 via-purple-500 to-pink-500 bg-clip-text bg-transparent" />
                      <p>oh_myv33ll</p>
                    </div>
                    <div
                      title="Linkedin"
                      className="flex flex-col md:flex-row gap-2"
                    >
                      <Linkedin className="text-blue-500" />
                      <p>NovelCandra</p>
                    </div>
                    <div
                      title="Twitter"
                      className="flex flex-col md:flex-row gap-2"
                    >
                      <Twitter className="text-green-400" />
                      <p>NovelCandra</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* SKILL */}
        <div className="mt-12 px-40 space-x-2.5">
          <h2 className="text-2xl font-mono">Skills mastered</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 mt-12 gap-12">
            <Card className="w-96">
              <CardContent>
                <div className="flex flex-1 gap-2.5 items-center">
                  <Image src={Skillone} alt="react Js" width={"100"} />
                  <p className="text-2xl font-mono">React Js</p>
                </div>
              </CardContent>
            </Card>
            <Card className="w-96">
              <CardContent>
                <div className="flex flex-1 gap-2.5 items-center">
                  <Image src={SkillTwo} alt="react Js" width={"100"} />
                  <p className="text-2xl font-mono">Javascript</p>
                </div>
              </CardContent>
            </Card>
            <Card className="w-96">
              <CardContent>
                <div className="flex flex-1 gap-2.5 items-center">
                  <Image src={SkillThree} alt="react Js" width={"100"} />
                  <p className="text-2xl font-mono">Typescript</p>
                </div>
              </CardContent>
            </Card>
            <Card className="w-96">
              <CardContent>
                <div className="flex flex-1 gap-2.5 items-center">
                  <Image src={SkillFour} alt="react Js" width={"100"} />
                  <p className="text-2xl font-mono">Mysql</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* end SKill */}
        <div className="mt-12">
          <FooterPage />
        </div>
      </BackgroundRippleEffect>
    </>
  );
}
