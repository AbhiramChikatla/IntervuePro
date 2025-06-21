"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, User as UserIcon } from "lucide-react"; // Added UserIcon for potential use
import Link from "next/link";
import { auth } from "@/firebase/client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { getUserDocument } from "@/firebase/actions";
import { UserProfile } from "@/types";
import { useUserStore } from "@/hooks/userUser";
import { Skeleton } from "./ui/skeleton"; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true); // Added loading state
  const pathname = usePathname();
  const isInterviewPage = pathname?.startsWith("/interview");
  const router = useRouter();
  const {
    setUser: setUserState,
    setIsAuthenticated,
    user: userState,
  } = useUserStore();

  useEffect(() => {
    setIsLoadingUser(true); // Start loading when component mounts or auth state might change
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser && firebaseUser.emailVerified) {
        try {
          const userDoc = await getUserDocument(firebaseUser.uid);
          if (userDoc) {
            setUserState(userDoc as UserProfile);
            setIsAuthenticated();
          } else {
            setUserState(null);
            // Optionally, still set isAuthenticated to false if userDoc is not found but firebaseUser exists
            // setIsAuthenticated(false); 
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
          setUserState(null);
          // setIsAuthenticated(false);
          toast.error("Failed to load user details.");
        } finally {
          setIsLoadingUser(false);
        }
      } else {
        setUserState(null);
        // setIsAuthenticated(false); // Ensure auth state is false if no firebaseUser
        setIsLoadingUser(false);
      }
    });

    return () => unsubscribe();
  }, [setUserState, setIsAuthenticated]); // Dependencies for useEffect

  const handleNavlinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    setIsLoadingUser(true); // Optional: show loading during logout
    try {
      await signOut(auth);
      router.push("/");
      setUserState(null);
      setIsAuthenticated(); // This should set isAuthenticated to false
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed.");
    } finally {
      setIsLoadingUser(false);
    }
  };

  if (isInterviewPage) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center select-none">
            <Link
              onClick={handleNavlinkClick}
              href="/"
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center text-white font-extrabold ">
                <span className="inline-block">H</span>
              </div>
              <span className="text-lg font-bold">HireMentis</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              onClick={handleNavlinkClick}
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <Link
              onClick={handleNavlinkClick}
              href="/jobs"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Jobs
            </Link>
            <Link
              onClick={handleNavlinkClick}
              href="/#features"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Features
            </Link>
            <Link
              onClick={handleNavlinkClick}
              href="/#how-it-works"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              How it works
            </Link>
            <Link
              onClick={handleNavlinkClick}
              href="/#pricing"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              onClick={handleNavlinkClick}
              href="/#testimonials"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Testimonials
            </Link>
          </div>

          {/* CTA Buttons and User Profile */}
          <div className="hidden md:flex items-center gap-4">
            {isLoadingUser ? (
              <>
                <Skeleton className="h-10 w-20" /> 
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </>
            ) : !userState ? (
              <>
                <Link onClick={handleNavlinkClick} href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link onClick={handleNavlinkClick} href="/signup">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    Sign Up Free
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="border border-red-500 text-red-400 hover:bg-red-50 hover:text-red-300 hover:border-red-400"
                >
                  Logout
                </Button>
                {/* User Profile Avatar */}
                <div
                  className="ml-2 cursor-pointer"
                  onClick={() => router.push("/profile")}
                  title="Profile"
                >
                  <div className="w-10 h-10 select-none rounded-full text-xs bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold border border-emerald-300 hover:bg-emerald-200 transition">
                    {userState?.profilePicture ? (
                      <div>
                        <Image
                          src={userState?.profilePicture || ""}
                          alt="User Avatar"
                          className="w-full h-full rounded-full object-cover"
                          width={100}
                          height={100}
                        />
                      </div>
                    ) : userState.displayName ? (
                      userState.displayName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                    ) : (
                      userState.email?.[0]?.toUpperCase() || <UserIcon size={20} />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                onClick={handleNavlinkClick}
                href="/"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
              <Link
                onClick={handleNavlinkClick}
                href="/jobs"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Jobs
              </Link>
              <Link
                onClick={handleNavlinkClick}
                href="/#features"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Features
              </Link>
              <Link
                onClick={handleNavlinkClick}
                href="/#how-it-works"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                How it works
              </Link>
              <Link
                onClick={handleNavlinkClick}
                href="/#pricing"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                onClick={handleNavlinkClick}
                href="/#testimonials"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Testimonials
              </Link>

              {/* Mobile CTA and User Profile */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {isLoadingUser ? (
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-10 rounded-full self-start mt-2" />
                  </div>
                ) : !userState ? (
                  <>
                    <Link onClick={handleNavlinkClick} href="/login">
                      <Button variant="ghost" className="w-full justify-start">Login</Button>
                    </Link>
                    <Link onClick={handleNavlinkClick} href="/signup">
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mt-2">
                        Sign Up Free
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <div
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer mb-2"
                      onClick={() => {
                        router.push("/profile");
                        handleNavlinkClick();
                      }}
                    >
                      <div className="w-10 h-10 select-none rounded-full text-xs bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold border border-emerald-300">
                        {userState?.profilePicture ? (
                          <Image
                            src={userState.profilePicture}
                            alt="User Avatar"
                            className="w-full h-full rounded-full object-cover"
                            width={40}
                            height={40}
                          />
                        ) : userState.displayName ? (
                          userState.displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                        ) : (
                          userState.email?.[0]?.toUpperCase() || <UserIcon size={20} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-700">
                          {userState.displayName || userState.email}
                        </p>
                        <p className="text-xs text-gray-500">View Profile</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => { handleLogout(); handleNavlinkClick(); }}
                      className="w-full justify-start border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500"
                    >
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
