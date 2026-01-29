import React from 'react';
import { Heart, MessageCircle, Repeat } from 'lucide-react';

interface TweetProps {
  handle: string;
  name: string;
  avatar: string;
  content: string;
  likes: string;
  featured?: boolean;
}

const Tweet: React.FC<TweetProps> = ({ handle, name, avatar, content, likes, featured }) => (
  <div className={`bg-[#121218] border border-white/10 rounded-xl p-6 flex flex-col justify-between ${featured ? 'md:col-span-2 md:row-span-1 border-neon-cyan/30 bg-neon-cyan/5' : ''}`}>
    <div>
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full bg-gray-700 mr-3" />
        <div>
          <div className="font-bold text-white leading-none">{name}</div>
          <div className="text-gray-500 text-sm">{handle}</div>
        </div>
        <div className="ml-auto text-gray-600">
           <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </div>
      </div>
      <p className={`text-gray-300 ${featured ? 'text-xl' : 'text-base'}`}>{content}</p>
    </div>
    <div className="flex items-center text-gray-500 text-sm mt-4 space-x-6">
       <div className="flex items-center space-x-1 group cursor-pointer hover:text-pink-500">
          <Heart className="w-4 h-4 group-hover:fill-current" />
          <span>{likes}</span>
       </div>
       <div className="flex items-center space-x-1 hover:text-blue-400 cursor-pointer">
          <MessageCircle className="w-4 h-4" />
          <span>Reply</span>
       </div>
       <div className="flex items-center space-x-1 hover:text-green-400 cursor-pointer">
          <Repeat className="w-4 h-4" />
          <span>Repost</span>
       </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">What People Are Saying</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Tweet 
            name="Alex Dev" 
            handle="@devuser123" 
            avatar="https://picsum.photos/100/100?random=1"
            likes="2.4k"
            content="Finally, a setup that doesn't make me mass anxious about security. Took 5 minutes and I actually understand what it did."
          />
          
          <Tweet 
            name="Sarah Ops" 
            handle="@sysadmin_sarah" 
            avatar="https://picsum.photos/100/100?random=2"
            likes="956"
            content="The security audit at the end that shows everything green? Chef's kiss 🧑‍🍳💋. Auto-configuring UFW saves so much pain."
          />

           <Tweet 
            name="AI Researcher" 
            handle="@AIenthusiast" 
            avatar="https://picsum.photos/100/100?random=3"
            likes="1.8k"
            content="I was about to give up on MoltBot after reading those security articles. This wizard saved me. The Kimi integration is crazy cheap too."
          />

          <Tweet 
            name="CyberSec Lead" 
            handle="@securityresearcher" 
            avatar="https://picsum.photos/100/100?random=4"
            likes="5.2k"
            featured={true}
            content="This is how all AI tools should ship. Security by default, not security as an afterthought. If you aren't using this wizard, you are doing it wrong."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;