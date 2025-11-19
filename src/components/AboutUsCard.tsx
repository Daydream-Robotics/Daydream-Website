import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold m-1  ">About Us</h2>
      <div className=" mb-3 w-full  max-w-300 border-b-4 border-accent "></div>
      <div className="w-Full max-w-300 ">
        
          
          <h4 className="font-bold text-center text-card-foreground text-xl">
            
          </h4>
          
          <p className="text-forground text-xl text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        
      </div>
    </div>
  );
}
