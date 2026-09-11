export type Project = {
    slug: string;
    title: string;
    year: number;
    category: string;
    description: string;
    images: string[];
    layout:
    | "festival"
    | "grid"
    | "stack"
    | "aemvs"
    | "opendata"
    | "orditutile"
    | "orqid"
    | "presentation3d";
    videoUrl?: string;
    prototypeUrl?: string;
    externalUrl?: string;
};

export const projects: Project[] = [

    {
        slug: "aemvs",
        title: "AEM-VS",
        year: 2023,
        category: "Web design, branding",
        description: "En collarobation avec l'Association des Écoles de Musique du Valais. Mandat concours visant à renouveler leur identité visuelle. Logo et webdesign.",
        layout: "aemvs",
        prototypeUrl: "https://www.figma.com/proto/FQm0B9BkqSFDhuRbJDSfUZ/AEM-VMS-VS?node-id=3-2&page-id=0%3A1&starting-point-node-id=3%3A2&t=EJ2CTM4eRRR9nBfr-1",
        images: [
            "/images/aemvs/aemvslogo.png",
            "/images/aemvs/aemvstote.png",
        ],
    },

    {
        slug: "opendata",
        title: "Opendata.ch/forum2024",
        year: 2023,
        category: "Image de promotion",
        description: "Image promotionnelle pour le Forum OpenData.ch/2024, la principale conférence suisse sur les données ouvertes et l'utilisation des données dans l'intérêt publique.",
        layout: "opendata",
        externalUrl: "https://opendata.ch/language/fr/evenements/opendata-ch-2024-forum/",
        images: [
            "/images/opendata/opendataflat.png",
        ],
    },

    {
        slug: "orqidevent",
        title: "Orqid - évènements & co.",
        year: 2023,
        category: "Branding",
        description: "Logo créé pour une entreprise dans la décoration d'évènements.",
        layout: "orqid",
        externalUrl: "https://orqid.ch/",
        images: [
            "/images/orqidevent/orqidlogo.png",
            "/images/orqidevent/orqidlogosmall.png",
        ],
    },

    {
        slug: "frnknon3",
        title: "FRNK - NON3",
        year: 2022,
        category: "Vidéographie, montage, direction",
        description: "Clip de musique créé en collabotation avec FRNK, filmé avec un camescope et monté sur final cup pro.",
        layout: "grid",
        videoUrl: "https://www.youtube.com/watch?v=HYWCiuxCg7Y",
        images: [
            "/images/frnknon3/non3still1.png",
            "/images/frnknon3/non3still2.png",
            "/images/frnknon3/non3still3.png",
            "/images/frnknon3/non3still4.png",
        ],
    },

    {
        slug: "festival",
        title: "Novo Festival",
        year: 2022,
        category: "Web Design",
        description: "Festival fictif conçu sur Figma.",
        layout: "festival",
        images: [
            "/images/festival/hero.png",
            "/images/festival/lineup.png",
            "/images/festival/map.png",
            "/images/festival/tickets.png",
        ],
    },

    {
        slug: "ordiutile",
        title: "Ordi Utile",
        year: 2021,
        category: "Branding",
        description: 'Dans le cadre du programme "Ordi utile" au sein de la Fondation Valaisanne Action Jeunesse, j\'ai conçu ce logo. Ce programme visait à fournir des ordinateurs aux élèves pendant la période de confinement.',
        layout: "orditutile",
        images: [
            "/images/ordiutile/ordiutilelogo.png",
        ],
    },

    {
        slug: "fruits",
        title: "Photographie",
        year: 2021,
        category: "Photographie",
        description: "Photos que j'ai pris durant ma formation IMD à l'eracom. Diffuseur utilisé comme fond et plexiglas pour le reflet.",
        layout: "stack",
        images: [
            "/images/fruits/kiwi.png",
            "/images/fruits/poire.png",
        ],
    },

    {
        slug: "presentation3d",
        title: "Présentation 3D",
        year: 2021,
        category: "3D, montage, production musicale",
        description: "Vidéo créée hors de ma formation d’IMD à l’eracom. Réalisée sur Blender, avec une production musicale faite sur Fruity Loops.",
        layout: "presentation3d",
        videoUrl: "https://youtu.be/lU2KiPwui2I",
        images: [
            "/images/video3d/video3dstill1.png",
            "/images/video3d/video3dstill2.png",
            "/images/video3d/video3dstill3.png",
        ],
    },

];