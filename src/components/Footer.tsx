"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Apollo Studios</h2>
            <p className="mb-6 text-muted-foreground">
              Stay updated with our latest projects and insights.
            </p>
            <form className="relative">
              <Input type="email" placeholder="Enter your email" className="pr-12" />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block hover:text-primary">Home</a>
              <a href="#" className="block hover:text-primary">Services</a>
              <a href="#" className="block hover:text-primary">Projects</a>
              <a href="/projects" className="block hover:text-primary">Prices</a>
              <a href="/contact" className="block hover:text-primary">About</a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">Email: apollostudios@gmail.com</p>
            <p className="text-sm">Phone: +250 796 105 514</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Icon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 Apollo Studios. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
