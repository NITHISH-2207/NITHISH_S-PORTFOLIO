import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiCode, FiAlertCircle } from 'react-icons/fi';

// Fallback high-fidelity data if the GitHub API is offline or rate-limited
const FALLBACK_PROJECTS = [
  {
    name: 'ANTI_SPOOFING_SYSTEM',
    description: 'AI-powered Online Exam Proctoring System. Uses face recognition (DeepFace) and object detection (YOLOv8) to prevent cheating in online exams. Features face login, phone camera room scanning, and real-time object violation alerts.',
    language: 'Python',
    html_url: 'https://github.com/NITHISH-2207/ANTI_SPOOFING_SYSTEM',
    tech_tags: ['Python', 'YOLOv8', 'DeepFace', 'Streamlit', 'OpenCV'],
    featured: true,
    demo_url: null
  },
  {
    name: 'AGROGUIDE',
    description: 'A smart crop advisory platform providing real-time weather updates, location-based crop recommendations, and mandi pricing. Built to support sustainable agriculture and help farmers make data-driven decisions.',
    language: 'PHP',
    html_url: 'https://github.com/NITHISH-2207/AGROGUIDE',
    tech_tags: ['PHP', 'MySQL', 'APIs', 'HTML5', 'Bootstrap'],
    featured: true,
    demo_url: null
  },
  {
    name: 'Disease-Outbreak-Early-Warning-System',
    description: 'Streamlit-based data analytics platform that monitors epidemic and disease outbreaks. Analyzes real-time regional datasets, recognizes trends, and lists high-risk infection zones.',
    language: 'Python',
    html_url: 'https://github.com/NITHISH-2207/Disease-Outbreak-Early-Warning-System',
    tech_tags: ['Python', 'Streamlit', 'Pandas', 'Data Analytics', 'Matplotlib'],
    featured: true,
    demo_url: 'https://diseaseoutbreakearly.streamlit.app/'
  },
  {
    name: 'cpu-scheduler',
    description: 'Interactive operating system simulation demonstrating various CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) with intuitive Gantt chart animations and statistics.',
    language: 'JavaScript',
    html_url: 'https://github.com/NITHISH-2207/cpu-scheduler',
    tech_tags: ['HTML5', 'CSS3', 'JavaScript', 'Algorithms', 'CSS Easing'],
    featured: false,
    demo_url: 'https://cpu-scheduler-nithish.surge.sh/'
  },
  {
    name: 'SENTIMENT_ANALYSIS_APP',
    description: 'An NLP tool built using Python and Streamlit to analyze text reviews extracted directly from uploaded PDF documents, classifying them into positive, neutral, or negative categories.',
    language: 'Python',
    html_url: 'https://github.com/NITHISH-2207/SENTIMENT_ANALYSIS_APP',
    tech_tags: ['Python', 'Streamlit', 'NLTK', 'PDF Parsing', 'Machine Learning'],
    featured: false,
    demo_url: 'https://sentimentanalysisapp-a7op8itprwacdqeuww2vtn.streamlit.app/'
  },
  {
    name: 'Warshall-s-algorithm-for-transitive-closure',
    description: 'A web-based mathematical simulator demonstrating Warshall’s Algorithm for finding the transitive closure of directed graphs with interactive step-by-step matrix changes.',
    language: 'JavaScript',
    html_url: 'https://github.com/NITHISH-2207/Warshall-s-algorithm-for-transitive-closure',
    tech_tags: ['JavaScript', 'HTML5 Canvas', 'CSS Grid', 'Graph Theory'],
    featured: false,
    demo_url: 'https://warshall.netlify.app/'
  },
  {
    name: 'Learning-Resources-Finder-',
    description: 'Dynamic resource finder portal aggregating web development tutorials, programming documentation, tech guides, and academic courses based on specific topics.',
    language: 'PHP',
    html_url: 'https://github.com/NITHISH-2207/Learning-Resources-Finder-',
    tech_tags: ['PHP', 'XAMPP', 'MySQL', 'Web Dev', 'Search Algorithms'],
    featured: false,
    demo_url: null
  },
  {
    name: 'ATM-SYSTEM',
    description: 'ATM System simulation representing account balance check, secure PIN verification, cash deposits, and withdrawals.',
    language: 'JavaScript',
    html_url: 'https://github.com/NITHISH-2207/ATM-SYSTEM',
    tech_tags: ['JavaScript', 'HTML5', 'CSS3'],
    featured: false,
    demo_url: 'https://atm-system-n1av.vercel.app/'
  }
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [apiLimitExceeded, setApiLimitExceeded] = useState(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/NITHISH-2207/repos?sort=updated')
      .then((res) => {
        if (!res.ok) {
          throw new Error('API Rate Limit or Network Issue');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const enriched = data
            .filter(repo => !repo.fork)
            .map((repo) => {
              const matchedFallback = FALLBACK_PROJECTS.find(
                (f) => f.name.toLowerCase() === repo.name.toLowerCase()
              );
              return {
                id: repo.id,
                name: repo.name.replace(/[-_]/g, ' '),
                description: repo.description || matchedFallback?.description || 'A software project hosted on GitHub.',
                language: repo.language || matchedFallback?.language || 'Code',
                html_url: repo.html_url,
                tech_tags: matchedFallback?.tech_tags || (repo.language ? [repo.language] : ['Software']),
                featured: matchedFallback?.featured || false,
                demo_url: matchedFallback?.demo_url || repo.homepage || null,
              };
            });
          setProjects(enriched);
        } else {
          throw new Error('Malformed response');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn('GitHub API failed/rate-limited, using luxury fallbacks:', err);
        setApiLimitExceeded(true);
        const fallbackMapped = FALLBACK_PROJECTS.map((p, index) => ({
          id: index,
          name: p.name.replace(/[-_]/g, ' '),
          description: p.description,
          language: p.language,
          html_url: p.html_url,
          tech_tags: p.tech_tags,
          featured: p.featured,
          demo_url: p.demo_url,
        }));
        setProjects(fallbackMapped);
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'Python', 'PHP', 'JavaScript', 'HTML/CSS'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'All') return matchesSearch;
    if (selectedFilter === 'HTML/CSS') {
      return matchesSearch && (project.language === 'HTML' || project.language === 'CSS');
    }
    return matchesSearch && project.language === selectedFilter;
  });

  const featuredTitlesOrdered = [
    'anti spoofing system',
    'agroguide',
    'disease outbreak early warning system',
    'sentiment analysis app'
  ];

  const getNormalizedName = (name) => {
    return name.toLowerCase().replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
  };

  // Filtered featured projects in the requested exact order
  const featuredProjects = [];
  featuredTitlesOrdered.forEach((title) => {
    const found = filteredProjects.find(
      (p) => getNormalizedName(p.name) === title
    );
    if (found) {
      featuredProjects.push(found);
    }
  });

  // All other projects (remaining, preserving their relative order, excluding duplicates)
  const allProjects = filteredProjects.filter(
    (p) => !featuredTitlesOrdered.includes(getNormalizedName(p.name))
  );

  const orderedProjects = [...featuredProjects, ...allProjects];

  return (
    <section id="projects" className="pt-16 pb-24 relative overflow-hidden px-6 md:px-12 bg-luxury-bgSec">
      <style>{`
        .project-card-custom {
          transition: all 220ms ease !important;
        }
        .project-card-custom:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 6px 20px rgba(27, 42, 74, 0.10) !important;
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-luxury-gold mb-3 font-bold"
        >
          My Creations
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl md:text-4xl font-heading font-bold text-luxury-textPri"
        >
          Featured <span className="text-luxury-navy">Projects</span>
        </motion.h2>
        <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mt-4" />
      </div>

      <div className="max-w-6xl mx-auto">
        {apiLimitExceeded && (
          <div className="mb-6 p-3 rounded-lg bg-luxury-card border border-luxury-border text-luxury-textSec text-xs flex items-center justify-center gap-2 max-w-lg mx-auto">
            <FiAlertCircle className="text-luxury-navy text-sm shrink-0" />
            <span>GitHub API rate limit hit. Displaying cached repository data.</span>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 w-full">
          {/* Categories Tab Selector */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase border transition-colors ${
                  selectedFilter === cat
                    ? 'bg-luxury-navy text-luxury-bg border-luxury-navy shadow-sm'
                    : 'bg-luxury-card text-luxury-textSec border-luxury-border hover:border-luxury-gold/50 hover:text-luxury-textPri'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-luxury-textSec/45" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-luxury-card border border-luxury-border text-xs text-luxury-textPri focus:outline-none focus:border-luxury-navy/40 transition-colors font-medium placeholder-luxury-textSec/45"
            />
          </div>
        </div>

        {/* Grid List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-8 h-8 rounded-full border border-t-luxury-gold border-luxury-border animate-spin" />
            <span className="text-[10px] font-mono text-luxury-textSec/40 uppercase tracking-widest">
              Connecting GitHub...
            </span>
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {orderedProjects.map((project, index) => {
                const isFeatured = featuredTitlesOrdered.includes(getNormalizedName(project.name));
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={prefersReducedMotion ? {} : { duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                    className={`project-card-custom glass-card rounded-xl p-5 flex flex-col justify-between group h-full relative shadow-sm bg-luxury-card/90 ${
                      isFeatured ? 'border border-luxury-gold/50' : 'border border-luxury-border hover:border-luxury-gold/50'
                    }`}
                  >
                    {/* Featured Tag */}
                    {(project.featured || isFeatured) && (
                      <div className="absolute top-4 right-4 border border-luxury-gold/50 text-luxury-gold text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded">
                        Featured
                      </div>
                    )}

                    <div>
                      {/* Icon */}
                      <div className="text-luxury-navy text-xl mb-4 p-2 bg-luxury-bg rounded-lg w-fit border border-luxury-border flex items-center justify-center">
                        <FiCode />
                      </div>

                      <h3 className="text-base font-bold text-luxury-textPri group-hover:text-luxury-navy transition-colors duration-300 capitalize">
                        {project.name}
                      </h3>

                      <p className="text-xs text-luxury-textSec mt-2.5 leading-relaxed line-clamp-4 min-h-[64px] font-medium">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1 mt-4">
                        {project.tech_tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-luxury-bg text-[8px] font-mono text-luxury-textSec font-bold uppercase tracking-wider border border-luxury-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Links */}
                    <div className={`flex items-center mt-5 border-t border-luxury-border pt-4 ${project.demo_url ? 'gap-3' : 'justify-center'}`}>
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.demo_url ? 'flex-1' : 'w-full max-w-[180px]'} flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-luxury-bg hover:bg-luxury-bgSec text-luxury-textPri border border-luxury-border text-[10px] font-bold tracking-wider uppercase transition-colors shadow-sm`}
                      >
                        <FiGithub size={12} />
                        <span>Code</span>
                      </a>
                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-luxury-navy text-luxury-bg hover:bg-luxury-gold text-[10px] font-bold tracking-wider uppercase transition-colors shadow-sm"
                        >
                          <FiExternalLink size={12} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && orderedProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-2">
            <FiSearch className="text-luxury-textSec/30 text-3xl" />
            <h4 className="text-luxury-textPri font-bold text-sm">
              No matching projects
            </h4>
            <p className="text-xs text-luxury-textSec/45">
              Try adjusting your query keywords or selected language filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
