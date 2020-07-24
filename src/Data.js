import cadr from "./Images/кадры.jpg";
import daynight from "./Images/daynight.jpg"
import poch from "./Images/pdpch.jpg";
import scandal from "./Images/scandal.jpg";
import club from "./Images/клубника.jpg";
import i2711 from "./Images/2711.jpg";
import qualm from "./Images/qualm.jpg";
import girl from "./Images/girl.jpg";
import i1909 from "./Images/1909.jpg";
import weak from "./Images/weak.jpg";
import scattered from "./Images/scattered.jpg";
import sos from "./Images/sos.jpg";
import lied from "./Images/соврал.jpg"

import cadrA from "./Audio/кадры.mp3";
import daynightA from "./Audio/daynight.mp3"
import pochA from "./Audio/почему да потому что.mp3";
import scandalA from "./Audio/скандал.mp3";
import clubA from "./Audio/клубника.mp3";
import i2711A from "./Audio/2711.mp3";
import qualmA from "./Audio/qualm.mp3";
import girlA from "./Audio/girl.mp3";
import i1909A from "./Audio/1909.mp3";
import weakA from "./Audio/weak.mp3";
import scatteredA from "./Audio/scattered.mp3";
import sosA from "./Audio/sos.mp3";
import liedA from "./Audio/соврал.mp3"

export const reactData = {
    tech: ["React", "HTML/CSS/JQuery"],
    images: [
        {
            original: 'static/reactProj/darkPC.png',
            thumbnail: 'static/reactProj/darkPC.png',
        },
        {
            original: 'static/reactProj/whitePC.png',
            thumbnail: 'static/reactProj/whitePC.png',
        },
        {
            original: 'static/reactProj/darkSwitch.png',
            thumbnail: 'static/reactProj/darkSwitch.png',
        },
    ]
};

export const repairAppData = {
    tech: ["Python", "Flask", "MongoDB", "HTML/CSS/JQuery"],
    images: [
        {
            original: 'static/repairProj/main.png',
            thumbnail: 'static/repairProj/main.png',
        },
        {
            original: 'static/repairProj/list.png',
            thumbnail: 'static/repairProj/list.png',
        },
        {
            original: 'static/repairProj/date.png',
            thumbnail: 'static/repairProj/date.png',
        },
        {
            original: 'static/repairProj/rem.png',
            thumbnail: 'static/repairProj/rem.png',
        },
    ]

};


export const techData = [
    "React", "Python", "Flask", "MongoDB", "Docker", "HTML/CSS/JQuery", "C++/Qt", "Markdown", "LaTeX"
];

export const videoData = [
    {
        name: "weak (AJR)",
        type: "cover",
        src: "_HW41oixbNI",
    },
    {
        name: "слишком влюблен (нервы)",
        type: "cover",
        src: "uJ1pNfRUmpM",
    },
    {
        name: "alacrity",
        type: "composition",
        src: "CguxlCLyILQ",
    },
];

export const audioData = [
    {
        class: "cover",
        cover: true,
        name: "соврал",
        type: "piano cover",
        auth: "егор натс & mental affection",
        date: "30.06.2020",
        img: lied,
        audio: liedA,
    },
    {
        class: "comp",
        comp: true,
        name: "stop other signals",
        type: "beat",
        date: "16.06.2020",
        img: sos,
        audio: sosA,
        href: "https://drive.google.com/drive/folders/1jDBBN__nR6Oq1Ga_5Dq2SxeNKZOo8w_J?usp=sharing"
    },
    {
        class: "remix",
        remix: true,
        name: "кадры",
        type: "piano remix",
        auth: "иван рейс",
        date: "12.05.2020",
        img: cadr,
        audio: cadrA,
        href: "https://drive.google.com/drive/folders/1OnynJAZeh_ectb6XEVxKgyhqlFEHf8nr?usp=sharing"
    },
    {
        comp: true,
        name: "daynight",
        type: "piano composition",
        date: "19.04.2020",
        img: daynight,
        audio: daynightA,
        href: "https://drive.google.com/drive/folders/1FGnbzgCW1Nlf0M24aw5iMfN5FCVTkB2F?usp=sharing"
    },
    {
        class: "cover",
        cover: true,
        name: "почему да потому...",
        type: "piano cover",
        auth: "pyrokinesis",
        date: "09.04.2020",
        img: poch,
        audio: pochA,
        href: "https://drive.google.com/drive/folders/15-JI0nSwW1d0cdFtNLsf1-wnUbdPv8DZ?usp=sharing"
    },
    {
        class: "remix",
        remix: true,
        name: "скандал",
        type: "piano remix",
        auth: "егор натс",
        date: "09.03.2020",
        img: scandal,
        audio: scandalA,
        href: "https://drive.google.com/open?id=1DMTndJT0NCLG040DvlL-urrVchlJKIXi"
    },
    {
        class: "cover",
        cover: true,
        name: "клубника в декабре",
        type: "piano cover",
        auth: "pyrokinesis",
        date: "31.12.2019",
        img: club,
        audio: clubA,
        href: "https://drive.google.com/open?id=1M_rJzD-F635IJPJvVwEMie6Ol2B7LNcf"
    },
    {
        class: "comp",
        comp: true,
        name: "2711",
        type: "piano expromt",
        date: "9.12.2019",
        img: i2711,
        audio: i2711A,
        href: "https://drive.google.com/open?id=13u-YC9h5yHmxs21k1WMO7lU-xVkf7mZw"
    },
    {
        class: "comp",
        comp: true,
        name: "qualm",
        type: "piano composition",
        date: "4.12.2019",
        img: qualm,
        audio: qualmA,
        href: "https://drive.google.com/open?id=10P1R-v1A-0tDETFGhrepJO77XbbIIdQZ"
    },
    {
        class: "cover",
        cover: true,
        name: "девочка в классе",
        type: "piano cover",
        auth: "джизус",
        date: "18.11.2019",
        img: girl,
        audio: girlA,
        href: "https://drive.google.com/open?id=19HkwJIaAo-zNmGzQir1IpGGpfwi7x4kR"
    },
    {
        class: "comp",
        comp: true,
        name: "1909",
        type: "piano expromt",
        date: "29.09.2019",
        img: i1909,
        audio: i1909A,
        href: "https://drive.google.com/open?id=1QNEbHE9AJjClSbGeNZ3sWYJtikM5h6Fw"
    },
    {
        class: "cover",
        cover: true,
        name: "weak",
        type: "piano cover",
        auth: "AJR",
        date: "30.08.2019",
        img: weak,
        audio: weakA,
        href: "https://drive.google.com/open?id=1U40hOsLxlqjVjr1UNSaZMBWtLbpKh6Hc"
    },
    {
        class: "comp",
        comp: true,
        name: "scattered",
        type: "piano composition",
        date: "12.08.2019",
        img: scattered,
        audio: scatteredA,
        href: "https://drive.google.com/open?id=1DMTndJT0NCLG040DvlL-urrVchlJKIXi"
    },

];
