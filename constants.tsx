import { Education, Experience, Project, Publication, PublicationType, SkillCategory } from "./types";
import { Mail, Phone, MapPin, Linkedin, BookOpen, GraduationCap } from "lucide-react";

export const CONTACT_INFO = {
    name: "Abdullah Alkhatib",
    title: "Ph.D. Candidate in Electrical & Computer Engineering",
    email: "abdkat@hotmail.com",
    phone: "+971 547866517",
    location: "Al Rawdah, Abu Dhabi, UAE",
    links: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/abdkat/", icon: Linkedin },
        { name: "ResearchGate", url: "https://www.researchgate.net/profile/Abdullah_Alkhateeb5", icon: BookOpen },
        {
        name: "CV",
        url: "https://drive.google.com/file/d/1LiL9BmEpQiH0Yl-tMocDgJ-1RiXLLnQs/view?usp=sharing",
        icon: GraduationCap
    }


        // Using BookOpen as generic academic icon
    ]
};

export const ABOUT_ME = `
Jordanian computer engineer and Ph.D. candidate in Electrical & Computer Engineering at Khalifa University. 
I possess specialized expertise in wireless communications, including spatial modulation, MIMO, and Reconfigurable Intelligent Surfaces (RIS). 
My technical background extends to FPGA/embedded systems using Xilinx flows, digital signal processing, and applied machine learning. 
I am experienced in lab instruction and hardware-in-the-loop prototyping, with a proven ability to deliver efficient output and solve complex analytical problems.
`;

export const RESEARCH_INTERESTS = [
    "Wireless Communications",
    "Spatial Modulation & MIMO",
    "Reconfigurable Intelligent Surfaces (RIS)",
    "FPGA & Embedded Systems",
    "Digital Signal Processing",
    "Applied Machine Learning"
];

export const EDUCATION: Education[] = [
    {
        institution: "Khalifa University",
        location: "Abu Dhabi, UAE",
        degree: "Ph.D. in Electrical and Computer Engineering",
        period: "08.2021 – 12.2025",
        gpa: "3.63/4"
    },
    {
        institution: "German Jordanian University",
        location: "Amman, Jordan",
        degree: "M.Sc. in Computer Engineering",
        period: "10.2018 – 06.2020",
        gpa: "Cumulative GPA: 90.1%"
    },
    {
        institution: "University Of Jordan",
        location: "Amman, Jordan",
        degree: "B.Sc. in Computer Engineering",
        period: "09.2010 – 01.2016",
        gpa: "3.33/4"
    }
];

export const EXPERIENCE: Experience[] = [
    {
        role: "Teaching/Research Assistant",
        institution: "Khalifa University",
        location: "Abu Dhabi, UAE",
        period: "08.2021 – Present",
        details: [
            "Conducting research on novel communication systems, including pinching antenna-based beamforming for receive spatial modulation and virtual spatial modulation assisted by Time Reversal RIS.",
            "Performing analytical and simulation-based performance analysis of Fluid Antenna-Assisted Space Shift Keying and O-RIS assisted NOMA-VLC systems.",
            "Supporting laboratory instruction and academic research within the Electrical and Computer Engineering department."
        ]
    },
    {
        role: "Research Assistant – Hardware and Communication (SMTs MIMO)",
        institution: "German Jordanian University",
        location: "Amman, Jordan",
        period: "01.2017 – 08.2021",
        details: [
            "Implemented the first physical transmitter for a Quadrature Space Shift Keying (QSSK) MIMO system.",
            "Designed multiple Spatial Modulation Techniques (SMTs) and simulated RF imperfections using MATLAB, followed by hardware prototyping on Xilinx FPGAs using Simulink HDL-coder.",
            "Resolved critical RF impairments such as frequency offset and timing recovery to generate experimental performance results."
        ]
    },
    {
        role: "Gov. Services Assistant",
        institution: "Ministry of Information & Communications Technology",
        location: "Amman, Jordan",
        period: "01.2017 – 12.2025",
        details: [
            "Assisted in the management and delivery of government services within the ministry."
        ]
    },
    {
        role: "Research Assistant – Machine Learning (Deep Learning)",
        institution: "University Of Jordan",
        location: "Amman, Jordan",
        period: "11.2016 – 07.2018",
        details: [
            "Developed recognition and classification projects including Handwritten Optical Character Recognition (HOCR) and Material Recognition and Classification (MRC).",
            "Implemented EEG signal classification for seizure detection, achieving high-performance results using modern AI frameworks."
        ]
    }
];

export const TEACHING_HIGHLIGHTS = [
    "Laboratory Instruction Support (Khalifa University)",
    "Academic Research Mentorship (Khalifa University)",
    "Hardware-in-the-loop Prototyping Instruction"
];

export const PROJECTS: Project[] = [
    {
        title: "SMTs MIMO Communication Systems",
        description: "Developed a wireless communication system to improve MIMO performance while reducing power consumption and cost; implemented using Xilinx FPGA and Simulink."
    },
    {
        title: "Deep Learning Recognition Systems",
        description: "Built classification frameworks for Arabic OCR and Material Recognition using TensorFlow and Keras, outperforming existing benchmarks."
    },
    {
        title: "Parking Assist System",
        description: "Designed an ultrasonic-based distance measurement system integrated with a PIC microcontroller and Android application to assist drivers with vehicle blind spots."
    }
];

export const SKILLS: SkillCategory[] = [
    {
        category: "Hardware & FPGA",
        skills: ["Xilinx FPGA", "PIC", "Arduino", "Hardware-in-the-loop prototyping"]
    },
    {
        category: "Software",
        skills: ["Python", "MATLAB", "C++", "Java", "TensorFlow", "Keras", "scikit-learn", "MySQL"]
    },
    {
        category: "Languages",
        skills: ["Arabic (Native)", "English (Excellent)"]
    },
    {
        category: "Core Strengths",
        skills: ["Problem-solving", "Analytical thinking", "Team collaboration", "Precise communication"]
    }
];

export const PUBLICATIONS: Publication[] = [
    // Under Review
    {
        title: "Pinching Antenna-Based Beamforming for Receive Spatial Modulation",
        authors: "A. Alkhatib, P. C. Sofotasios",
        venue: "IEEE Transactions on Communications",
        type: PublicationType.UNDER_REVIEW
    },
    {
        title: "Performance Analysis of PASS Based Spatial Modulation",
        authors: "A. Alkhatib, P. C. Sofotasios",
        venue: "IEEE International Conference on Communications (ICC 2026)",
        type: PublicationType.UNDER_REVIEW
    },
    {
        title: "Time Reversal Reconfigurable Intelligent Surface Assisted Virtual Spatial Modulation System Design",
        authors: "A. Alkhatib, P. C. Sofotasios",
        venue: "IEEE Transactions on Communications",
        type: PublicationType.UNDER_REVIEW
    },
    {
        title: "Performance Analysis of TR Based RIS Assisted Spatial Modulation",
        authors: "A. Alkhatib, P. C. Sofotasios",
        venue: "IEEE International Conference on Communications (ICC 2026)",
        type: PublicationType.UNDER_REVIEW
    },
    {
        title: "Time Reversal Enhanced Spatial Modulation System Design",
        authors: "A. Alkhatib, P. C. Sofotasios",
        venue: "IEEE Open Journal of the Vehicular Technology Society (OJ-VTS)",
        type: PublicationType.UNDER_REVIEW
    },
    // Journals
    {
        title: "O-RIS Assisted NOMA-VLC System: Integrated Positioning and Communications",
        authors: "",
        venue: "IEEE Wireless Communications Letters",
        type: PublicationType.JOURNAL
    },
    {
        title: "A Physical Transmitter Implementation of a Quadrature Space Shift Keying MIMO System",
        authors: "O. Hiari, R. Mesleh, A. Alkhatib",
        venue: "IEEE Transactions on Circuits and Systems II: Express Briefs, vol. 68, no. 1, pp. 251--255",
        type: PublicationType.JOURNAL
    },
    {
        title: "A System Simulation Framework for Modeling Space Modulation Techniques",
        authors: "O. Hiari, R. Mesleh, A. Al-Khatib",
        venue: "IEEE Systems Journal, vol. 14, no. 1, pp. 1435--1446",
        type: PublicationType.JOURNAL
    },
    // Conferences
    {
        title: "Analysis of Fluid Antenna-Assisted Space Shift Keying Variants",
        authors: "A. Alkhatib et al.",
        venue: "United Arab Emirates Graduate Students Research Conference (UAEGSRC), Conrad Hotel, Abu Dhabi, UAE",
        year: "March 2023",
        type: PublicationType.CONFERENCE
    },
    {
        title: "Emerging Trends in Massive Access Techniques for B5G and 6G Networks: A Concise Review",
        authors: "L. Z. Kahsay, A. Alkhatib, S. Muhaidat, P. C. Sofotasios",
        venue: "IEEE Middle East Conference on Communications and Networking (MECOM)",
        year: "2024",
        type: PublicationType.CONFERENCE
    },
    {
        title: "Hardware Implementation of Generalized Space Modulation Techniques Using Simulink RF Blockset",
        authors: "R. Mesleh, A. Al-Khatib, O. Hiari",
        venue: "International Conference on Broadband Communications, Networks and Systems",
        type: PublicationType.CONFERENCE
    },
    {
        title: "A New Implementation of Deep Neural Networks for Optical Character Recognition and Face Recognition",
        authors: "K. S. Younis, A. A. Alkhateeb",
        venue: "Proceedings of the New Trends in Information Technology Conference, pp. 157--162",
        type: PublicationType.CONFERENCE
    }
];