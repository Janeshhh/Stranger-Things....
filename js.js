// Data Structure for Episodes
const seasonsData = {
    1: [
        { title: "Chapter One: The Vanishing of Will Byers", duration: "49m", desc: "On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab." },
        { title: "Chapter Two: The Weirdo on Maple Street", duration: "56m", desc: "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call." },
        { title: "Chapter Three: Holly, Jolly", duration: "52m", desc: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her." },
        { title: "Chapter Four: The Body", duration: "51m", desc: "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover. Nancy and Jonathan form an unlikely alliance." },
        { title: "Chapter Five: The Flea and the Acrobat", duration: "54m", desc: "Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension." },
        { title: "Chapter Six: The Monster", duration: "47m", desc: "A frantic Jonathan looks for Nancy in the darkness, but Steve's looking for her, too. Hopper and Joyce uncover the truth about the lab's experiments." },
        { title: "Chapter Seven: The Bathtub", duration: "42m", desc: "Eleven struggles to reach Will, while Lucas warns that the bad men are coming. Nancy and Jonathan show the police what Jonathan caught on camera." },
        { title: "Chapter Eight: The Upside Down", duration: "55m", desc: "Dr. Brenner holds Hopper and Joyce for questioning while the boys wait with Eleven in the gym. Back at Will's, Nancy and Jonathan prepare for battle." }
    ],
    2: [
        { title: "Chapter One: MADMAX", duration: "48m", desc: "As the town preps for Halloween, a high-scoring rival shakes things up at the arcade, and a skeptical Hopper inspects a field of rotting pumpkins." },
        { title: "Chapter Two: Trick or Treat, Freak", duration: "56m", desc: "After Will sees something terrible on trick-or-treat night, Mike wonders whether Eleven's still out there. Nancy wrestles with the truth about Barb." },
        { title: "Chapter Three: The Pollywog", duration: "51m", desc: "Dustin adopts a strange new pet, and Eleven grows increasingly impatient. A well-meaning Bob urges Will to stand up to his fears." },
        { title: "Chapter Four: Will the Wise", duration: "46m", desc: "An ailing Will opens up to Joyce — with disturbing results. While Hopper digs for the truth, Eleven unearths a surprising discovery." },
        { title: "Chapter Five: Dig Dug", duration: "58m", desc: "Nancy and Jonathan swap conspiracy theories with a new ally as Eleven searches for someone from her past. Bob the Brain tackles a difficult problem." },
        { title: "Chapter Six: The Spy", duration: "51m", desc: "Will's connection to a shadowy evil grows stronger, but no one's quite sure how to stop it. Elsewhere, Dustin and Steve forge an unlikely bond." },
        { title: "Chapter Seven: The Lost Sister", duration: "45m", desc: "Psychic visions draw Eleven to a band of violent outcasts and an angry girl with a shadowy past." },
        { title: "Chapter Eight: The Mind Flayer", duration: "47m", desc: "An unlikely hero steps forward when a deadly development puts the Hawkins Lab on lockdown, trapping Hopper, Joyce, Mike, Bob and Will inside." },
        { title: "Chapter Nine: The Gate", duration: "62m", desc: "Eleven makes plans to finish what she started while the survivors turn up the heat on the monstrous force that's holding Will hostage." }
    ],
    3: [
        { title: "Chapter One: Suzie, Do You Copy?", duration: "50m", desc: "Summer brings new jobs and creeping romance. But the mood shifts when Dustin's radio picks up a Russian broadcast, and Will senses something is wrong." },
        { title: "Chapter Two: The Mall Rats", duration: "50m", desc: "Nancy and Jonathan follow a lead, Steve and Robin sign on to a secret mission, and Max and Eleven go shopping. A rattled Billy makes troubling choices." },
        { title: "Chapter Three: The Case of the Missing Lifeguard", duration: "49m", desc: "With El and Max looking for Heather, Nancy and Jonathan dig deeper into the rats, and Steve and Dustin track Russian spies." },
        { title: "Chapter Four: The Sauna Test", duration: "52m", desc: "A code red brings the gang back together to face a frighteningly familiar evil. Karen urges Nancy to keep digging, and Robin finds a useful map." },
        { title: "Chapter Five: The Flayed", duration: "51m", desc: "Strange surprises lurk inside an old farmhouse and deep beneath the Starcourt Mall. Meanwhile, the Mind Flayer is gathering strength." },
        { title: "Chapter Six: E Pluribus Unum", duration: "59m", desc: "Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue." },
        { title: "Chapter Seven: The Bite", duration: "54m", desc: "With time running out—and an assassin close behind—Hopper's crew races back to Hawkins, where El and the kids are preparing for war." },
        { title: "Chapter Eight: The Battle of Starcourt", duration: "77m", desc: "Terror reigns in the food court when the Mind Flayer comes to collect. But down below, in the dark, the future of the world is at stake." }
    ],
    4: [
        { title: "Chapter One: The Hellfire Club", duration: "76m", desc: "Still reeling from the events of Starcourt, high school isn't going well for everyone. Meanwhile, a terrifying new threat emerges in Hawkins." },
        { title: "Chapter Two: Vecna's Curse", duration: "75m", desc: "A shocking murder brings the police to the trailer park. Nancy attempts to follow a lead, while Mike arrives in California for a visit." },
        { title: "Chapter Three: The Monster and the Superhero", duration: "63m", desc: "Murray and Joyce fly to Alaska. El faces severe consequences. Robin and Nancy dig into the history of Hawkins' demonic presence." },
        { title: "Chapter Four: Dear Billy", duration: "77m", desc: "Max's condition worsens. As time runs out, the kids desperately try to find a way to save her before Vecna claims another victim." },
        { title: "Chapter Five: The Nina Project", duration: "74m", desc: "Owens takes El to Nevada, where she's forced to confront her past. The Hawkins kids search the creepy Creel house for clues." },
        { title: "Chapter Six: The Dive", duration: "73m", desc: "Behind the Iron Curtain, a risky rescue gets underway. The California crew seeks help from a hacker, and Steve takes a plunge." },
        { title: "Chapter Seven: The Massacre at Hawkins Lab", duration: "98m", desc: "Hopper braces to battle a monster. Dustin dissects Vecna's motives. El remembers the devastating truth of what happened in the lab years ago." },
        { title: "Chapter Eight: Papa", duration: "85m", desc: "Nancy has sobering visions, and El passes an important test. Back in Hawkins, the crew gathers supplies and prepares for a final stand." },
        { title: "Chapter Nine: The Piggyback", duration: "150m", desc: "With selfless hearts and a clash of metal, heroes fight from every corner of the battlefield to save Hawkins — and the world itself." }
    ],
    5: [
        { title: "Chapter One: The Crawl", duration: "82m", desc: "The beginning of the end. Hawkins reels from the catastrophic earthquake as the Upside Down begins to completely bleed into the real world." },
        { title: "Chapter Two: The Vanishing of Holly Wheeler", duration: "76m", desc: "A familiar nightmare strikes the Wheeler family. The party realizes Vecna's plan is far more expansive than they imagined." },
        { title: "Chapter Three: The Turnbow Trap", duration: "84m", desc: "Desperate for leverage, our heroes venture into a dangerous anomaly. New alliances are tested as supernatural flora overtakes the town." },
        { title: "Chapter Four: Sorcerer", duration: "79m", desc: "Will's connection to the dark forces provides crucial intel. Eleven trains to harness her powers in unprecedented ways to combat the final boss." },
        { title: "Chapter Five: Shock Jock", duration: "88m", desc: "A rebel broadcast from a familiar voice rallies the survivors. The military's intervention complicates an already volatile battlefield." },
        { title: "Chapter Six: Escape From Camazotz", duration: "91m", desc: "Trapped in a labyrinth of shadows, the group must rely on intellect and raw courage to navigate nightmare landscapes." },
        { title: "Chapter Seven: The Bridge", duration: "95m", desc: "Preparations are complete. A vital chokepoint between dimensions becomes the staging ground for a preemptive strike." },
        { title: "Chapter Eight: The Rightside Up", duration: "142m", desc: "The ultimate showdown. The fate of Hawkins and the world is decided in a battle of willpower, sacrifice, and the unbreakable bond of friends." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- SPA NAVIGATION ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const logo = document.querySelector('.logo');

    // Logo returns to home (Characters page)
    if (logo) {
        logo.addEventListener('click', () => {
            const homeBtn = document.querySelector('.nav-btn[data-target="home"]');
            if (homeBtn) {
                homeBtn.click();
            }
        });
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Hide all pages, show target
            const targetId = btn.getAttribute('data-target');
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // --- EPISODES GENERATOR ---
    const seasonTabsContainer = document.getElementById('season-tabs');
    const seasonInfoContainer = document.getElementById('season-info');
    const episodeListContainer = document.getElementById('episode-list');

    // Generate tabs
    Object.keys(seasonsData).forEach(seasonNum => {
        const btn = document.createElement('button');
        btn.classList.add('season-tab-btn');
        btn.textContent = `Season ${seasonNum}`;
        btn.setAttribute('data-season', seasonNum);
        
        // Default select season 1
        if (seasonNum === '1') {
            btn.classList.add('active');
            renderEpisodes('1');
        }

        btn.addEventListener('click', () => {
            document.querySelectorAll('.season-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEpisodes(seasonNum);
        });

        seasonTabsContainer.appendChild(btn);
    });

    function renderEpisodes(seasonNum) {
        const episodes = seasonsData[seasonNum];
        
        // Update info header
        seasonInfoContainer.innerHTML = `Viewing <strong>Season ${seasonNum}</strong> — ${episodes.length} Episodes`;

        // Clear existing list
        episodeListContainer.innerHTML = '';

        // Inject episodes
        episodes.forEach((ep, idx) => {
            const epDiv = document.createElement('div');
            epDiv.classList.add('episode-item');
            
            epDiv.innerHTML = `
                <div class="ep-header">
                    <span class="ep-num">EPISODE ${idx + 1}</span>
                    <span class="ep-duration">${ep.duration}</span>
                </div>
                <h3 class="ep-title">${ep.title}</h3>
                <p class="ep-desc">${ep.desc}</p>
            `;
            // Add a slight stagger to animation
            epDiv.style.animationDelay = `${idx * 0.05}s`;
            epDiv.style.animation = 'fadeIn 0.5s ease-out forwards';
            epDiv.style.opacity = '0'; // Initial state for anim
            
            episodeListContainer.appendChild(epDiv);
        });
    }

});
