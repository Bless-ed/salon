import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const Navbar = async() => {
    const user = await currentUser();

    return (
        <nav className={"sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"}>
            <MaxWidthWrapper>
                <div className={"flex h-14 items-center justify-between border-b border-zinc-200"}>

                    <Link 
                        rel="stylesheet" href="/" className="flex z-40 font-bold">
                            Scissors <span className="text-primary">Cut</span>
                    </Link>

                    <div className ={'h-full flex items-center space-x-4'}>
                        {user ? (
                            <> 
                              

                               <Link href='g'
                               className={cn(
                                   buttonVariants({
                                        variant: 'ghost',
                                       size: 'sm',
                                   })
                               )}
                               >
                                 Dashboard ✨
                               </Link>


                               <SignedIn>
                                    <UserButton />
                               </SignedIn>
                               
                            </>
                        ) : (
                            <>
                                <SignUpButton 
                                className={cn(
                                    buttonVariants({
                                        variant:'outline',
                                        size: 'sm',
                                        className: 'cursor-pointer'
                                    })
                                )} 
                                mode={'modal'}
                                />
                                    
                            

                           <SignInButton 
                            className={cn(
                                 buttonVariants({
                                      variant: 'outline',
                                      size: 'sm',
                                      className: 'cursor-pointer'
                                 })
                            )}
                           mode={'modal'}

                           />
                           

                            
                            <div className="h-8 w-px bg-zinc-200 hidden sm:block"/>

                           
                            <SignInButton 
                            className={cn(
                                buttonVariants({
                                    size: 'sm',   
                                    className:'hidden sm:flex items-center gap-1'
                                })
                            )}
                            mode={'modal'}
                            >
                                Appointment

                            </SignInButton>
                                
                            
                            </>
                        )}

                    
                    
                </div>

            </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;