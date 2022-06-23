const quotes = {
    "Once you replace negative thoughts with positive ones, you'll start having positive results. – Willie Nelson ":'1',
    "No matter what you're going through, there's a light at the end of the tunnel and it may seem hard to get to it but you can do it and just keep working towards it and you'll find the positive side of things. – Demi Lovato ":'2',
    "Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive. – Leah LaBelle ":'3',
    "There is still much in life to be hopeful about and grateful for. – Jeffrey R. Holland":'4',
    "Don’t be content to do the easy thing. Look for opportunities to stretch farther than you think you can. – Ione J. Simpson ":'5',
    "No matter what your past has been, you have a spotless future. – Hugh B. Brown ":'5',
    "A strong, positive self-image is the best possible preparation for success. – Joyce Brothers ":'6',
    "Few things in the world are more powerful than a positive push. A smile. A world of optimism and hope. A 'you can do it' when things are tough. – Richard M. DeVos ":'6',
    "You've done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination. – Ralph Marston ":'7',
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. – Thomas A. Edison ":'8',
    "The past is to be learned from but not lived in. – Jeffrey R. Holland ":'9',
    "Regardless of our current state, there is hope for us. – Dieter F. Uchtdorf ":'10',
    "You do not find the happy life. You make it. – Thomas S. Monson":'11',
    "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared. – Buddha ":'12',
    "No act of kindness, no matter how small, is ever wasted. – Aesop ":'13',
    "All our dreams can come true, if we have the courage to pursue them. – Walt Disney ":'14',
    "The truly rich are those who enjoy what they have. – Yiddish Proverb ":'15',
    "Do good and good will come to you. – Adam Lowy ":'16',
    "Words can inspire, thoughts can provoke, but only action truly brings you closer to your dreams. – Brad Sugars ":'17',
    "Always be a first-rate version of yourself, instead of a second-rate version of somebody else. – Judy Garland ":'18',
    "Nobody can go back and start a new beginning, but anyone can start today and make a new ending. – Maria Robinson ":'19',
    "You’re braver than you believe, and stronger than you seem, and smarter than you think. – A.A. Mine ":'20',
    "You’re off to great places, today is your day. Your mountain is waiting, so get on your way. – Dr. Seuss  ":'21',
    "Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before. – Bonnie Blair ":'22',
    "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact. – Les Brown ":'23',
    "The only time you fail is when you fall down and stay down. – Stephen Richards ":'24',
    "Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you. – Mary Lou Retton":'24',
    "You are never too old to set another goal or dream a new dream. – Les Brown ":'26',
    "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on. – Charles Dickens ":'27',
    "Let your unique awesomeness and positive energy inspire confidence in others. – Anonymous ":'28',
    "Happiness is the only thing that multiplies when you share it. – Albert Schweitzer ":'29',
    "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely. – Roy T. Bennett ":'30'
};
const keys = Object.keys(quotes)
const prop = keys[Math.floor(Math.random() * keys.length)]
console.log(prop);
document.getElementById("quote").textContent=prop;