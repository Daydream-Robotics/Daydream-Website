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
          Team UCF7 (DayDream) is a hardworking robotics team of 26 members attending 
          University of Central Florida with an extremely diverse range of valuable skills, 
          this team is able to overcome complicated challenges of robotic design in a short 
          amount of time with limited materials. The skills of each member in UCF7 are unique 
          and essential to completing each task, and reliance on one another has made this team 
          highly interconnected and dynamic. As a team we strive to qualify for awards by having 
          an excellent notebook and attempting to optimize our robot as the meta changes throughout 
          the season. We would also want to reach a high placement in skills and create great autonomous 
          routes that can perform tasks quicker than the last. A major goal would be to reach worlds. But 
          most importantly to improve our engineering intuition. Most importantly, careful documentation of 
          their activities and thoughts allow this team to rise to the top regardless of the circumstances.

          </p>
        
      </div>
    </div>
  );
}
