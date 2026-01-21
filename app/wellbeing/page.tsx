"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeButton from "@/components/home-button"
import "@/styles/wellbeing.css"

interface Test {
  id: string
  title: string
  category: string
  why: string
  statements: string[]
  results: {
    rarely: {
      title: string
      description: string
      note: string
    }
    sometimes: {
      title: string
      description: string
      note: string
    }
    often: {
      title: string
      description: string
      note: string
    }
  }
}

const tests: Test[] = [
  {
    id: "exam-stress",
    title: "Exam Stress Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Examinations are meant to assess learning, but for many students they also become a major source of pressure. Fear of results, expectations from others, and self-doubt can silently affect focus, confidence, and emotional balance—even when preparation is sincere. This reflection helps students notice how exam-related stress is experienced internally, without judgement or labels.",
    statements: [
      "I feel tense or uneasy when exams or tests are approaching",
      "Thoughts about results distract me while studying",
      "I worry about disappointing parents, teachers, or myself",
      "My body feels restless or uncomfortable before or during exams",
      "Even after preparing, I feel unsure about my performance",
      "I replay exam mistakes in my mind repeatedly",
      "I feel pressure to perform beyond what feels manageable",
      "I struggle to relax when exams are near",
      "My confidence drops around exam periods",
      "Exam expectations affect my mood or motivation"
    ],
    results: {
      rarely: {
        title: "✨ You appear to be handling exam-related pressure reasonably well",
        description: "You appear to be handling exam-related pressure reasonably well at present. Feeling some stress before exams is normal, but your current patterns suggest that pressure is not overwhelming your emotional balance.",
        note: "Keep maintaining what's working for you and remember to take care of yourself."
      },
      sometimes: {
        title: "🌤️ Exam stress affects you at certain times",
        description: "Exam stress affects you at certain times, which is very common—especially during busy or high-expectation phases. Awareness, rest, and supportive guidance can help prevent stress from becoming heavier.",
        note: "Notice when it increases and reach out early if needed."
      },
      often: {
        title: "🌧️ Exam-related pressure may be affecting you more consistently",
        description: "Exam-related pressure may be affecting you more consistently. When worry or tension feels frequent, it is important not to manage it alone. Support can help restore confidence and balance.",
        note: "Seeking support reflects responsibility and self-awareness—not weakness."
      }
    }
  },
  {
    id: "learning-energy",
    title: "Learning Energy & Mental Fatigue Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Learning requires mental energy. When students continue studying despite feeling mentally exhausted, overloaded, or drained, learning can slowly feel heavier—even without obvious reasons. This reflection focuses on learning energy and mental fatigue, not medical burnout or diagnosis.",
    statements: [
      "I feel mentally tired after study sessions",
      "Starting study feels harder than it used to",
      "My mind feels exhausted even with moderate workload",
      "I continue studying despite feeling drained",
      "Breaks do not always help me feel refreshed",
      "I feel overloaded by academic demands",
      "My motivation drops when I feel mentally tired",
      "I struggle to maintain energy throughout the day",
      "Learning feels more tiring than interesting at times",
      "Mental fatigue affects how much I understand or remember"
    ],
    results: {
      rarely: {
        title: "✨ Your learning energy appears fairly balanced",
        description: "Your learning energy appears fairly balanced. Occasional tiredness is normal, but overall your mind seems able to recover and engage.",
        note: "Keep maintaining healthy study rhythms and recovery patterns."
      },
      sometimes: {
        title: "🌤️ Mental fatigue affects you during certain periods",
        description: "Mental fatigue affects you during certain periods. This is common during heavy academic phases. Paying attention to rest and pacing may help maintain balance.",
        note: "Notice patterns in when fatigue increases and adjust your routine accordingly."
      },
      often: {
        title: "🌧️ Learning energy may be consistently low at present",
        description: "Learning energy may be consistently low at present. When mental exhaustion feels frequent, additional support and adjustment can help prevent overload.",
        note: "Reaching out for guidance about study habits and recovery can make a real difference."
      }
    }
  },
  {
    id: "focus-distraction",
    title: "Focus & Distraction Awareness Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Many students want to study sincerely, yet find their attention drifting repeatedly. Distraction is not always about lack of effort—it is often linked to mental load, fatigue, stress, or overstimulation. This reflection helps students notice how focus and distraction are showing up in their learning, without blame or judgement.",
    statements: [
      "My mind wanders even when I try to concentrate",
      "I get distracted by my phone or other thoughts while studying",
      "I reread the same content multiple times to understand it",
      "Small noises or interruptions disturb my focus",
      "I struggle to stay focused for long periods",
      "I start thinking about unrelated things during study time",
      "I feel mentally present only for short durations",
      "Distraction makes studying feel frustrating",
      "I lose track of what I am studying easily",
      "Difficulty focusing affects my confidence"
    ],
    results: {
      rarely: {
        title: "✨ Your focus appears reasonably steady",
        description: "Your focus appears reasonably steady. Occasional distraction is normal, but overall attention does not seem to interfere significantly with learning.",
        note: "Continue practicing the habits that keep you focused and present."
      },
      sometimes: {
        title: "🌤️ Distraction affects you at times",
        description: "Distraction affects you at times, especially during mentally demanding periods. With small adjustments, focus can improve.",
        note: "Notice when distraction increases and explore what helps you refocus."
      },
      often: {
        title: "🌧️ Difficulty maintaining focus may be affecting learning consistently",
        description: "Difficulty maintaining focus may be affecting learning consistently. When distraction feels frequent, additional support and structure can help restore clarity.",
        note: "Talking to a teacher or counselor about focus strategies can help significantly."
      }
    }
  },
  {
    id: "study-rest",
    title: "Study–Rest Balance Reflection",
    category: "Academic Load & Learning Energy Reflections",
    why: "Consistent learning requires both effort and recovery. When rest is ignored or associated with guilt, the mind may remain stressed even during breaks—reducing learning effectiveness over time. This reflection helps students become aware of how well study and rest are balanced.",
    statements: [
      "My sleep is affected because of academic demands",
      "I study for long hours without sufficient breaks",
      "I feel guilty when I take rest",
      "I continue studying even when my body feels exhausted",
      "I struggle to relax fully during breaks",
      "Rest feels unproductive to me",
      "I push myself even when mentally tired",
      "My schedule leaves little time to recover",
      "I feel physically or mentally worn out",
      "Lack of rest affects my concentration or mood"
    ],
    results: {
      rarely: {
        title: "✨ Your study–rest balance appears relatively healthy",
        description: "Your study–rest balance appears relatively healthy. You seem able to study while also allowing recovery.",
        note: "Keep honoring your need for rest—it's essential for effective learning."
      },
      sometimes: {
        title: "🌤️ Balance may be inconsistent",
        description: "Balance may be inconsistent. During demanding phases, rest may need more attention to prevent overload.",
        note: "During busy periods, make rest a priority, not an afterthought."
      },
      often: {
        title: "🌧️ Rest may be getting overlooked",
        description: "Rest may be getting overlooked. When recovery is limited, learning can feel heavier and less effective. Supportive adjustments may help restore balance.",
        note: "Reaching out about balancing study and rest can help you feel better."
      }
    }
  },
  {
    id: "emotional-balance",
    title: "Emotional Balance Reflection",
    category: "Emotional Experience in Learning",
    why: "Academic life can influence emotions in subtle ways. Even capable students may feel emotionally overloaded, irritable, or unsettled without fully understanding why. This reflection supports awareness of emotional balance related to learning experiences, without labels or diagnosis.",
    statements: [
      "My emotions feel mostly stable during academic routines",
      "Small academic issues affect my mood strongly",
      "I feel emotionally overwhelmed at times",
      "I can calm myself after feeling stressed",
      "My mood changes with academic pressure",
      "I feel emotionally drained after study sessions",
      "I recover emotionally after setbacks",
      "Stress affects how I feel about learning",
      "I feel emotionally balanced most days",
      "Emotional strain affects my motivation"
    ],
    results: {
      rarely: {
        title: "✨ Your emotional balance appears relatively stable",
        description: "Your emotional balance appears relatively stable. Challenges may arise, but emotions do not seem to overwhelm your learning experience.",
        note: "Keep maintaining practices that keep you emotionally steady."
      },
      sometimes: {
        title: "🌤️ Emotional ups and downs are present",
        description: "Emotional ups and downs are present, which is common during academic pressure. Awareness and support can help maintain balance.",
        note: "Notice patterns in your emotions and what helps you feel steadier."
      },
      often: {
        title: "🌧️ Emotional load may be affecting learning more consistently",
        description: "Emotional load may be affecting learning more consistently. When emotions feel heavy or persistent, reaching out for support can help restore steadiness.",
        note: "You deserve support—sharing how you feel is an important first step."
      }
    }
  },
  {
    id: "mood-motivation",
    title: "Mood & Motivation Reflection",
    category: "Emotional Experience in Learning",
    why: "Motivation does not remain constant. Academic pressure, repeated effort, and emotional load can slowly affect interest, energy, and enthusiasm for learning—even when students want to do well. This reflection helps students notice patterns in mood and motivation related to learning, without judgement or labels.",
    statements: [
      "I feel interested in what I am studying",
      "I struggle to feel motivated even when work is important",
      "My mood affects how willing I feel to study",
      "I feel mentally dull or uninterested at times",
      "I enjoy learning moments occasionally",
      "Starting study feels harder than continuing it",
      "My motivation drops when pressure increases",
      "I feel emotionally disconnected from studies sometimes",
      "Encouragement helps improve my motivation",
      "Low mood affects my effort or consistency"
    ],
    results: {
      rarely: {
        title: "✨ Your motivation and mood appear generally positive",
        description: "Your motivation and mood appear generally positive. Interest in studying seems steady, and low mood does not seem to consistently interfere.",
        note: "Keep connecting with what makes learning meaningful to you."
      },
      sometimes: {
        title: "🌤️ Motivation and mood fluctuate at times",
        description: "Motivation and mood fluctuate at times, especially during high-pressure periods. This is completely normal and very common.",
        note: "Notice what activities or support help restore your motivation."
      },
      often: {
        title: "🌧️ Low motivation or mood may be affecting learning",
        description: "Low motivation or mood may be affecting learning more consistently. When disengagement feels frequent, exploring what's behind it or reaching out for support can help.",
        note: "Talking about what drains your motivation can help find practical solutions."
      }
    }
  },
  {
    id: "academic-anxiety",
    title: "Academic Anxiety Awareness Reflection",
    category: "Emotional Experience in Learning",
    why: "Academic anxiety can appear as constant worry, physical uneasiness, or fear of outcomes. This reflection focuses only on anxiety related to academic experiences, not clinical anxiety or diagnosis. The purpose is to support awareness—not to label or define.",
    statements: [
      "Academic thoughts make me feel uneasy or tense",
      "I experience physical signs of nervousness while studying",
      "I worry excessively about academic outcomes",
      "I imagine negative results even after preparing",
      "Academic pressure stays on my mind",
      "I feel relief only after tasks or exams are over",
      "Anxiety affects how clearly I think",
      "I feel restless when expectations are high",
      "Fear of failure affects my confidence",
      "Academic worry interferes with my focus"
    ],
    results: {
      rarely: {
        title: "✨ Academic anxiety does not seem to be strongly present",
        description: "Academic anxiety does not seem to be strongly present. While some nervousness before exams is normal, it does not appear to affect you heavily.",
        note: "You appear to have a healthy and realistic attitude toward academic challenges."
      },
      sometimes: {
        title: "🌤️ Academic anxiety appears during certain situations",
        description: "Academic anxiety appears during certain situations, particularly during exams or high-stakes periods. This is extremely common among students.",
        note: "Notice what specific situations trigger anxiety and what helps you feel calmer."
      },
      often: {
        title: "🌧️ Anxiety around academics may be affecting your wellbeing consistently",
        description: "Anxiety around academics may be affecting your wellbeing consistently. When worry feels frequent or intense, reaching out for support can help build confidence.",
        note: "Many students experience this—you are not alone. Support can make a real difference."
      }
    }
  },
  {
    id: "grit-persistence",
    title: "Grit & Persistence Reflection",
    category: "Learning Strengths & Inner Skills",
    why: "Learning involves effort, mistakes, and setbacks. Grit and persistence influence how students respond to difficulty—not how 'smart' they are. This reflection supports awareness of how consistently effort is maintained when challenges arise.",
    statements: [
      "I continue studying even after facing difficulties",
      "I feel discouraged easily when learning feels hard",
      "I try again after making academic mistakes",
      "Setbacks reduce my willingness to continue",
      "Long-term goals motivate my effort",
      "I give up faster than I would like",
      "I believe effort can improve outcomes",
      "Challenges make me feel emotionally drained",
      "I feel proud of persistence after difficulty",
      "I stay committed even when progress feels slow"
    ],
    results: {
      rarely: {
        title: "✨ Your persistence appears reasonably strong",
        description: "Your persistence appears reasonably strong. Setbacks do not easily defeat you, and you seem able to return to effort after difficulty.",
        note: "Keep nurturing the resilience and determination you clearly possess."
      },
      sometimes: {
        title: "🌤️ Persistence fluctuates during challenges",
        description: "Persistence fluctuates during challenges, especially when difficulty feels heavy. This is very normal—effort naturally feels harder during tough phases.",
        note: "Remembering past successes can help you persist through current struggles."
      },
      often: {
        title: "🌧️ Difficulty sustaining effort may be affecting learning",
        description: "Difficulty sustaining effort may be affecting learning, especially when setbacks accumulate. Support in building confidence and breaking goals into smaller steps can help restore resilience.",
        note: "Exploring what feels most draining and what kinds of support help can make a real difference."
      }
    }
  },
  {
    id: "learning-confidence",
    title: "Learning Self-Confidence Reflection",
    category: "Learning Strengths & Inner Skills",
    why: "Confidence in learning is not about being perfect—it is about trusting one's ability to understand, improve, and cope with challenges. Academic pressure, comparison, and repeated difficulty can quietly reduce self-confidence over time. This reflection helps students notice how confident they currently feel in their learning abilities, without judgement or labels.",
    statements: [
      "I believe I can understand difficult topics with effort",
      "I doubt my abilities while studying",
      "I feel capable when I put in consistent effort",
      "I compare my performance negatively with others",
      "I trust my learning process",
      "Making mistakes reduces my confidence",
      "I feel confident asking questions or seeking help",
      "I feel unsure about my academic abilities lately",
      "Encouragement improves my confidence",
      "Self-doubt affects how I approach learning"
    ],
    results: {
      rarely: {
        title: "✨ Your learning confidence appears reasonably strong",
        description: "Your learning confidence appears reasonably strong. Setbacks do not seem to shake your belief that you can understand and improve.",
        note: "Keep trusting your ability to learn and grow through effort."
      },
      sometimes: {
        title: "🌤️ Confidence fluctuates, especially during challenges",
        description: "Confidence fluctuates, especially during challenging periods or after setbacks. This is very common—confidence naturally dips when learning feels hard.",
        note: "Notice what builds your confidence back up and lean on that."
      },
      often: {
        title: "🌧️ Self-doubt may be affecting your learning approach",
        description: "Self-doubt may be affecting your learning approach more consistently. When confidence feels persistently low, support in recognizing your strengths and reframing setbacks can help significantly.",
        note: "You are capable—sharing doubts with someone supportive can help restore belief in yourself."
      }
    }
  },
  {
    id: "growth-mindset",
    title: "Growth Mindset Reflection",
    category: "Learning Strengths & Inner Skills",
    why: "A growth mindset involves viewing mistakes and challenges as part of learning rather than signs of failure. Pressure, fear of judgement, or repeated setbacks can make mistakes feel threatening instead of useful. This reflection supports awareness of how students currently relate to mistakes, effort, and improvement.",
    statements: [
      "I see mistakes as opportunities to learn",
      "I fear making mistakes in academic settings",
      "Feedback helps me improve",
      "I avoid challenges to prevent failure",
      "Effort matters more than immediate success",
      "I feel discouraged when I struggle",
      "I believe abilities can improve with practice",
      "I feel judged when I make mistakes",
      "Challenges help me grow",
      "Fear of mistakes affects my participation"
    ],
    results: {
      rarely: {
        title: "✨ Your approach to learning appears growth-oriented",
        description: "Your approach to learning appears growth-oriented. You seem comfortable with mistakes and view challenges as opportunities rather than threats.",
        note: "Keep valuing effort and learning over immediate perfection."
      },
      sometimes: {
        title: "🌤️ You sometimes view mistakes as learning opportunities",
        description: "You sometimes view mistakes as learning opportunities, but fear of failure does emerge at times. This is a normal balance.",
        note: "Notice when fear shows up and remind yourself that mistakes are how we grow."
      },
      often: {
        title: "🌧️ Fear of mistakes may be affecting your learning engagement",
        description: "Fear of mistakes may be affecting your learning engagement more consistently. When failure feels too risky, support in reframing mistakes can help restore confidence.",
        note: "Learning to see mistakes as valuable feedback (not judgment) can be transformative."
      }
    }
  },
  {
    id: "home-adjustment",
    title: "Home–Study Adjustment Reflection",
    category: "Adjustment & Support Environment",
    why: "A student's learning experience is shaped not only by effort, but also by the home environment. Family expectations, space, noise, routines, and communication can support or unintentionally strain learning. This reflection helps students notice how home-related factors influence their studies, without placing blame.",
    statements: [
      "My home environment supports my studies",
      "Family expectations feel manageable",
      "Noise or space at home affects my concentration",
      "I feel pressure to meet others' academic expectations",
      "I can communicate my study needs at home",
      "Home responsibilities interfere with study time",
      "I feel emotionally supported at home",
      "Family discussions increase my academic stress",
      "I feel comfortable studying at home",
      "Home-related pressure affects my motivation"
    ],
    results: {
      rarely: {
        title: "✨ Your home environment seems supportive of learning",
        description: "Your home environment seems supportive of learning. You appear to have space and support to study effectively.",
        note: "Keep fostering open communication about your academic needs at home."
      },
      sometimes: {
        title: "🌤️ Home factors affect your studies at times",
        description: "Home factors affect your studies at times. Finding ways to communicate your needs or create study space can help.",
        note: "Even small adjustments at home can improve focus and reduce stress."
      },
      often: {
        title: "🌧️ Home-related challenges may be affecting learning",
        description: "Home-related challenges may be affecting learning more consistently. When home factors feel draining, talking to someone supportive about solutions can help.",
        note: "Your struggles are valid—exploring practical adjustments or support can make a difference."
      }
    }
  },
  {
    id: "school-adjustment",
    title: "School & Coaching Adjustment Reflection",
    category: "Adjustment & Support Environment",
    why: "Learning is influenced by the academic environment—teaching pace, expectations, interaction style, and perceived support. Even motivated students may struggle when the learning environment does not fully align with their needs. This reflection helps students understand how well they are adjusting to school or coaching environments, without blame or judgement.",
    statements: [
      "The teaching pace suits my learning ability",
      "I feel comfortable asking questions or doubts",
      "Academic expectations feel very high",
      "I feel supported by teachers or instructors",
      "I struggle to keep up with lessons at times",
      "The learning environment motivates me",
      "I feel anxious in class or coaching settings",
      "Feedback from teachers helps me improve",
      "I feel pressure to perform in front of others",
      "The academic environment affects my confidence"
    ],
    results: {
      rarely: {
        title: "✨ You appear well-adjusted to the academic environment",
        description: "You appear well-adjusted to the academic environment. Pace and expectations seem manageable, and you feel reasonably supported.",
        note: "Keep appreciating the environment that's working for you."
      },
      sometimes: {
        title: "🌤️ Adjustment challenges appear at times",
        description: "Adjustment challenges appear at times, particularly around pace or performance pressure. Finding ways to communicate needs can help.",
        note: "Reaching out to teachers about concerns can often lead to helpful adjustments."
      },
      often: {
        title: "🌧️ Adjustment to the academic environment may be affecting learning",
        description: "Adjustment to the academic environment may be affecting learning consistently. When the environment feels misaligned, support in problem-solving or finding alternatives can help.",
        note: "Speaking with teachers, counselors, or parents about adjustments is an important step."
      }
    }
  },
  {
    id: "social-support",
    title: "Social Support Awareness Reflection",
    category: "Adjustment & Support Environment",
    why: "Support from friends, teachers, and trusted adults can reduce academic stress and emotional burden. When students feel alone with pressure, learning can feel heavier—even when they are capable. This reflection supports awareness of how supported a student currently feels, without judgement.",
    statements: [
      "I have someone I can talk to about academic stress",
      "I feel alone when dealing with study pressure",
      "Friends understand my academic challenges",
      "Teachers or mentors feel approachable",
      "Emotional support helps me feel lighter",
      "I hesitate to share academic struggles",
      "I feel understood when I talk about learning stress",
      "Support reduces my anxiety or worry",
      "I know where to seek help if needed",
      "Feeling supported affects my confidence in learning"
    ],
    results: {
      rarely: {
        title: "✨ You appear to have good social support",
        description: "You appear to have good social support. People around you seem approachable and helpful when you face academic challenges.",
        note: "Keep nurturing these supportive relationships—they are valuable."
      },
      sometimes: {
        title: "🌤️ Support is available, but you sometimes feel alone",
        description: "Support is available, but you sometimes feel alone with pressure. Finding even one trusted person to talk to can help significantly.",
        note: "Reaching out, even when it feels hard, often leads to helpful conversations."
      },
      often: {
        title: "🌧️ Feeling unsupported may be affecting your wellbeing",
        description: "Feeling unsupported may be affecting your wellbeing. When academic stress feels isolating, reaching out to someone—a teacher, counselor, or trusted adult—can help restore connection.",
        note: "Support exists—sometimes the hardest step is asking for it."
      }
    }
  },
  {
    id: "self-discipline",
    title: "Self-Discipline & Routine Reflection",
    category: "Self-Management & Direction",
    why: "Self-discipline supports consistency, but it is influenced by motivation, emotional state, and structure—not just willpower. Academic pressure can disrupt routines, making consistency difficult. This reflection helps students notice patterns in discipline and routine, without labelling or judgement.",
    statements: [
      "I follow a regular study routine",
      "I delay tasks even when time is available",
      "I can manage distractions effectively",
      "I struggle to stay consistent",
      "Planning helps me study better",
      "I feel overwhelmed by schedules",
      "I complete tasks I set out to do",
      "I find it hard to maintain routines",
      "Structure improves my focus",
      "Lack of routine affects my learning"
    ],
    results: {
      rarely: {
        title: "✨ Your discipline and routine appear well-established",
        description: "Your discipline and routine appear well-established. Consistency comes naturally to you, and structure seems to support your learning.",
        note: "Keep valuing the routines that help you stay focused and productive."
      },
      sometimes: {
        title: "🌤️ Discipline fluctuates, especially under pressure",
        description: "Discipline fluctuates, especially under pressure or during demanding periods. This is very normal—maintaining routine becomes harder when stress increases.",
        note: "Notice when routines slip and gently rebuild them without self-judgment."
      },
      often: {
        title: "🌧️ Maintaining discipline and routine may be challenging",
        description: "Maintaining discipline and routine may be challenging more consistently. When consistency feels hard, exploring what gets in the way and creating simpler routines can help.",
        note: "Small, achievable routines often work better than complicated schedules."
      }
    }
  },
  {
    id: "emotional-regulation",
    title: "Emotional Regulation Reflection",
    category: "Self-Management & Direction",
    why: "Emotions are a natural part of learning. Stress, frustration, disappointment, or pressure can affect how students think, react, and continue their efforts. Emotional regulation does not mean suppressing feelings—it means understanding and managing them in healthy ways. This reflection supports awareness of how emotions are currently handled during academic experiences, without judgement or labels.",
    statements: [
      "I am able to calm myself when I feel stressed",
      "I feel stuck in frustration during academic challenges",
      "My emotions affect how well I study",
      "I recover emotionally after setbacks",
      "I feel overwhelmed by academic pressure",
      "I can manage anger or irritation related to studies",
      "Stress affects my reactions toward others",
      "I feel emotionally balanced most days",
      "I struggle to control emotions during pressure",
      "Emotional strain affects my concentration"
    ],
    results: {
      rarely: {
        title: "✨ You appear to manage emotions well",
        description: "You appear to manage emotions well during academic challenges. You can calm yourself when stressed and recover after setbacks.",
        note: "Keep practicing the emotional skills that help you stay steady."
      },
      sometimes: {
        title: "🌤️ Emotions affect you during pressure",
        description: "Emotions affect you during pressure, but you generally recover. Learning healthy ways to calm yourself can help even more.",
        note: "Notice what helps you feel calmer and use those strategies when intensity rises."
      },
      often: {
        title: "🌧️ Emotional overwhelm may be affecting your learning",
        description: "Emotional overwhelm may be affecting your learning more consistently. When emotions feel hard to manage, learning coping strategies or reaching out for support can help significantly.",
        note: "Emotional regulation is a skill—practice and support can help you build it."
      }
    }
  },
  {
    id: "purpose-direction",
    title: "Purpose & Learning Direction Reflection",
    category: "Self-Management & Direction",
    why: "Having a sense of purpose helps students stay motivated during effort and difficulty. When learning feels directionless or driven only by pressure, motivation can weaken—even when ability is present. This reflection supports awareness of how connected a student feels to purpose and direction in learning, without judgment or expectation.",
    statements: [
      "I understand why I am studying",
      "My studies feel meaningful to me",
      "I study mainly due to external pressure",
      "I feel connected to my future goals",
      "I feel lost about my academic direction",
      "Purpose motivates my effort",
      "I question the value of what I am studying",
      "Long-term goals guide my decisions",
      "Lack of clarity affects my motivation",
      "I feel directionless at times"
    ],
    results: {
      rarely: {
        title: "✨ Your sense of purpose appears clear",
        description: "Your sense of purpose appears clear. You understand why you are learning and feel connected to your direction.",
        note: "Keep nurturing this sense of meaning—it's a powerful motivator."
      },
      sometimes: {
        title: "🌤️ Purpose wavers at times",
        description: "Purpose wavers at times, especially when pressure or difficulty increases. Reconnecting with your longer-term goals can help restore clarity.",
        note: "It's normal to question direction sometimes—exploring your values can help."
      },
      often: {
        title: "🌧️ Lack of clear purpose may be affecting motivation",
        description: "Lack of clear purpose may be affecting motivation more consistently. When learning feels driven only by pressure, exploring what matters to you can help restore meaning.",
        note: "Taking time to think about your goals and values can help reignite motivation."
      }
    }
  }
]

export default function WellBeing() {
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null)
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const currentTest = selectedTestId ? tests.find(t => t.id === selectedTestId) : null
  const statements = currentTest?.statements || []

  const handleResponse = (index: number, response: string) => {
    setResponses({
      ...responses,
      [index]: response
    })
  }

  const handleSubmit = () => {
    if (Object.keys(responses).length === statements.length) {
      setShowResults(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const getResponseSummary = () => {
    const counts = {
      often: 0,
      sometimes: 0,
      rarely: 0
    }
    
    Object.values(responses).forEach(response => {
      if (response === "often") counts.often++
      else if (response === "sometimes") counts.sometimes++
      else if (response === "rarely") counts.rarely++
    })
    
    return counts
  }

  const getRecommendation = () => {
    const summary = getResponseSummary()
    
    if (summary.often > summary.rarely && summary.often > summary.sometimes) {
      return "often"
    } else if (summary.sometimes > summary.rarely && summary.sometimes >= summary.often) {
      return "sometimes"
    } else {
      return "rarely"
    }
  }

  const startTest = (testId: string) => {
    setSelectedTestId(testId)
    setResponses({})
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const resetToSelection = () => {
    setSelectedTestId(null)
    setResponses({})
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Test Selection View
  if (!selectedTestId) {
    return (
      <div className="app">
        <Header />
        <main className="wellbeing-container">
          <section className="wellbeing-hero">
            <h1>Mental Well-Being Self-Reflection</h1>
            <p className="subtitle">Psychology-Informed | Reflective | Non-Clinical</p>
            <p className="tagline">Because learning works best when the mind feels supported, not pressured.</p>
          </section>

          <section className="wellbeing-intro">
            <div className="intro-content">
              <p className="intro-text">
                These reflections are designed using principles from psychology related to stress, learning, and emotional regulation, without applying diagnostic labels.
              </p>
              <div className="disclaimer-box">
                <h3>⚠️ Important</h3>
                <p>These are not diagnoses, counselling sessions, or treatment. They are psychology-informed awareness tools intended to support reflection, balance, and responsible learning.</p>
              </div>
            </div>
          </section>

          <section className="tests-selection">
            <h2>Choose a Reflection to Explore</h2>
            <p className="selection-intro">Select the area you would like to reflect on. Each reflection takes about 5-10 minutes.</p>
            
            <div className="categories-grid">
              {Array.from(new Set(tests.map(t => t.category))).map(category => (
                <div key={category} className="category-group">
                  <h3 className="category-title">{category}</h3>
                  <div className="tests-list">
                    {tests.filter(t => t.category === category).map(test => (
                      <button
                        key={test.id}
                        className="test-card"
                        onClick={() => startTest(test.id)}
                      >
                        <h4>{test.title}</h4>
                        <p className="test-description">{test.why.substring(0, 100)}...</p>
                        <span className="test-cta">Start Reflection →</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <HomeButton />
        <Footer />
      </div>
    )
  }

  // Test View
  return (
    <div className="app">
      <Header />
      <main className="wellbeing-container">
        {!showResults ? (
          <>
            <section className="wellbeing-hero">
              <div className="test-header-content">
                <button className="back-btn" onClick={resetToSelection}>← Back to Tests</button>
                <h1>{currentTest?.title}</h1>
                <p className="subtitle">{currentTest?.category}</p>
              </div>
            </section>

            <section className="wellbeing-intro">
              <div className="intro-content">
                <div className="test-why-box">
                  <h3>Why This Self-Reflection Exists</h3>
                  <p>{currentTest?.why}</p>
                </div>
                <div className="disclaimer-box">
                  <h3>⚠️ Important</h3>
                  <p>This self-reflection does not provide diagnosis, counselling, or treatment. It is a psychology-informed awareness tool intended to support reflection and responsible learning.</p>
                </div>
              </div>
            </section>

            <section className="wellbeing-reflection">
              <div className="reflection-header">
                <h2>Self-Reflection Statements</h2>
                <p className="instruction">
                  Choose the option that feels most true overall. There is no need to overthink. There are no right or wrong answers. Respond based on your recent experience.
                </p>
              </div>

              <div className="statements-container">
                {statements.map((statement, index) => (
                  <div key={index} className="statement-card">
                    <div className="statement-number">{index + 1}</div>
                    <div className="statement-content">
                      <p className="statement-text">{statement}</p>
                      <div className="response-options">
                        <button
                          className={`response-btn ${responses[index] === "often" ? "active often" : ""}`}
                          onClick={() => handleResponse(index, "often")}
                        >
                          Often
                        </button>
                        <button
                          className={`response-btn ${responses[index] === "sometimes" ? "active sometimes" : ""}`}
                          onClick={() => handleResponse(index, "sometimes")}
                        >
                          Sometimes
                        </button>
                        <button
                          className={`response-btn ${responses[index] === "rarely" ? "active rarely" : ""}`}
                          onClick={() => handleResponse(index, "rarely")}
                        >
                          Rarely
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="submit-section">
                <button 
                  className="submit-btn" 
                  onClick={handleSubmit}
                  disabled={Object.keys(responses).length !== statements.length}
                >
                  {Object.keys(responses).length === statements.length 
                    ? "See My Reflection" 
                    : `Complete all statements (${Object.keys(responses).length}/${statements.length})`}
                </button>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="wellbeing-results">
              <h2>Understanding Your Responses</h2>
              
              {getRecommendation() === "rarely" && (
                <div className="result-card rarely">
                  <h3>{currentTest?.results.rarely.title}</h3>
                  <p>{currentTest?.results.rarely.description}</p>
                  <div className="result-note">{currentTest?.results.rarely.note}</div>
                </div>
              )}

              {getRecommendation() === "sometimes" && (
                <div className="result-card sometimes">
                  <h3>{currentTest?.results.sometimes.title}</h3>
                  <p>{currentTest?.results.sometimes.description}</p>
                  <div className="result-note">{currentTest?.results.sometimes.note}</div>
                </div>
              )}

              {getRecommendation() === "often" && (
                <div className="result-card often">
                  <h3>{currentTest?.results.often.title}</h3>
                  <p>{currentTest?.results.often.description}</p>
                  <div className="result-note">{currentTest?.results.often.note}</div>
                </div>
              )}
            </section>

            <section className="wellbeing-support">
              <h2>When Seeking Support Can Be Helpful</h2>
              <p className="support-intro">You may consider reaching out if you experience any of these:</p>
              <div className="support-indicators">
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>Feelings feel constant rather than temporary</p>
                </div>
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>Stress affects daily functioning or well-being</p>
                </div>
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>You feel emotionally exhausted most days</p>
                </div>
                <div className="indicator">
                  <span className="indicator-icon">✓</span>
                  <p>You feel stuck or unable to cope on your own</p>
                </div>
              </div>
              <p className="support-note">Seeking support is a sign of awareness and self-respect—not weakness.</p>
            </section>

            <section className="wellbeing-boundaries">
              <h2>Important Boundaries</h2>
              <div className="boundaries-content">
                <p>
                  <strong>Ishan Learning does not provide counselling, therapy, or clinical mental health services.</strong> This self-reflection is intended for awareness and learning support only.
                </p>
                <p>If emotional distress feels intense or long-lasting, students are encouraged to seek support from:</p>
                <div className="support-resources">
                  <div className="resource">
                    <span className="resource-icon">👨‍👩‍👧</span>
                    <p>Parents or trusted family members</p>
                  </div>
                  <div className="resource">
                    <span className="resource-icon">🏫</span>
                    <p>Teachers or school counsellors</p>
                  </div>
                  <div className="resource">
                    <span className="resource-icon">🏥</span>
                    <p>Qualified mental health professionals</p>
                  </div>
                  <div className="resource">
                    <span className="resource-icon">📞</span>
                    <p>Appropriate local support services or helplines</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="wellbeing-closing">
              <h2>A Closing Thought</h2>
              <p className="closing-main">
                Your mental and emotional experiences shape how you learn, grow, and persist.
              </p>
              <p className="closing-sub">
                Taking time to reflect is not a distraction from learning—it is part of learning responsibly.
              </p>
            </section>

            <div className="results-actions">
              <button 
                className="retake-btn"
                onClick={() => {
                  setResponses({})
                  setShowResults(false)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                Retake This Reflection
              </button>
              <button 
                className="explore-btn"
                onClick={resetToSelection}
              >
                Explore Other Reflections
              </button>
            </div>
          </>
        )}
      </main>

      <HomeButton />
      <Footer />
    </div>
  )
}
