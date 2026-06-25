import { Project, MaterialItem } from './types';

export const ENTER_PAGE_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBoZGlpIbPfGf5Ymi4tzBP63fDa9IKu29lyZmA9wiTWNiHTRaGh1gBShTvmhToUNMOutVQnmUjW08tFQIeIhlRq4MJM-swKV88Mv_m1seQTsqZ_touSRb29z_LzQWpylsSUX2tKjh6l3vT-X7cxIABHJ3VLKOdAEaftT7bNf-28ojpUnZLolEDqXE0anmvGkmaxrBIamqDNeSGZHCtBjU533MGB4fYgQIQpZcYyfpcFP47J493YmzxyJnc6XcYdecFEuI7jpK4n9fc";

export const MAIN_HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCl_fKUicJfI3U0oygNkhKkAoNC9lFqs86u-7i-wIqywzvNp8S5zgEXOU7fuxm3THGrrP_x0aoC27shuSG2JbyuB3dTusq2fHwDvUd3TY0EYgsV1kqNWAB3f8iIFb_AR9BJ-l1kVByYOl7sdAkVseMhXlAG9G-mMMPcsXC4xlPcVLYVMpNi74-YFC4iRVfvsU93-kJjQvgE3A45Pd_XGtEwvYbkLaiYjTmaSueylEpUkPH-2D_-9SpLvuTm9yleoPtLj_kCvz_WO0I";

export const PROJECTS: Project[] = [
  {
    id: "villa-laube",
    number: "01",
    title: "Villa L'Aube",
    subtitle: "Residential — Provence, France",
    category: "Residential",
    location: "Provence, France",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2NVa9NKB92tdB_NQ-ZTSrs4dKgQvgpHll2aJZlOTg5trCVG_3vGaFRg45meEG2y7kfP0Zdx7l4yxiCpWxYEhq4_yZOH8ZSAmj91IcZ4AosDOvcHD8qBm_AEDyibiWJB29E1xE2EutP9MIAGHinM_8bF6-CYU4oRdBLLI3zgmztuaQAaTSQmxB6tQ_8mry_-KbTahQBmGIG2KTt00IjgsxkcCoW8d7fNcGV_NeHK9gxWX3QT56vBlJbW5_jw_-z2DhvLY1-LZIR7M",
    year: 2023
  },
  {
    id: "the-sanctuary",
    number: "02",
    title: "The Sanctuary",
    subtitle: "Spatial Concept",
    category: "Concept",
    location: "Kyoto, Japan",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAQsuN9LUewBCdNNIDBW_kmC20fsrcF_wi092hJbpJsj2Ifoy7YR4Hyi6havEDS-CQWihSFtFrE5abhFeSwN0iRqRyxH7AL7TleWHIDRNiW7vq3uZGwvcjKgWX59Zxr4wNloUYdweqI9-0YufsZlcttLtNBwXvJXn5LCcM-UApkcS_wcJzBgHKgaU2rGu21PNFTPab0RPuP-2QAYGDGXAktdY5NA2TU1OwfSmixF2LTjuafqrsyoKQsU6LyOwOS7aRIQrGBNR7zps",
    year: 2024
  },
  {
    id: "aether-pavilion",
    number: "04",
    title: "The Aether Pavilion",
    subtitle: "Exhibition Space — Big Sur, USA",
    category: "Public",
    location: "Big Sur, USA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZQQVNZxQZ7gNCnM5oN17Nw5ncQx0vddjeYGwkJCi1KUgJSulf1aPwak0gRyWnyhiV-ZoM904TKaqLWzCZv_dAlON73UB69GHGrEcQm_zEhY0sQdTtW5hEIPIfFIfvT_zJyKSvnWfSNF1dGMkuT1YB7ylUEUN6ne5omhx_IfebyEmfFQIsqoOigDmt_brvLgHdULn0t6nU-oCY82Rl5FCWClX4Uv_IKf9p1ANK9Pxjg2BsNWzd8jEiTR9imgQBovKxMvh-4J5G1s",
    year: 2024
  },
  {
    id: "tectonic-monolith",
    number: "03",
    title: "Tectonic Monolith",
    subtitle: "Research Studio — Vals, Switzerland",
    category: "Concept",
    location: "Vals, Switzerland",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRvXIjxKDOkDO9EVWSOxOpcuFEMcU64OQT7aRySSv-Ra6GOKDYsmjBIUPwNuccJptKCoQvfkH6lb9UKpTgRKREjygluFuTxel4h9ZJ5BAGnk4CFQNEipyWuEtC753RW2awGn8_gzpnEQhhmi_YAjiAQhsdepBAPyfPHj9tqX9mxRoOxpkSgSTXAdHi9ApbEAgLKvis8xNFXdzNuUGrfkdBU8vxIvgV2LUQ3U8zGN0U9sN2cYE2lV7QYOCcRo-NxnSVUYoOknhXYJE",
    year: 2025
  }
];

export const CONCEPT_MODEL_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDRvXIjxKDOkDO9EVWSOxOpcuFEMcU64OQT7aRySSv-Ra6GOKDYsmjBIUPwNuccJptKCoQvfkH6lb9UKpTgRKREjygluFuTxel4h9ZJ5BAGnk4CFQNEipyWuEtC753RW2awGn8_gzpnEQhhmi_YAjiAQhsdepBAPyfPHj9tqX9mxRoOxpkSgSTXAdHi9ApbEAgLKvis8xNFXdzNuUGrfkdBU8vxIvgV2LUQ3U8zGN0U9sN2cYE2lV7QYOCcRo-NxnSVUYoOknhXYJE";

export const INTERIOR_INTERSTITIAL_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDnfH6As8MqWql91V2OnZqPGAiNVWJX7SHilzYwEg6ZrHkNrwA_-N8QlurcwV4HjRJ8FfzahRuj8hT1KnrRuaRK_4YTlG1m5lCXA4Eg8Hilc6CJ9lYYjL6D3KOqSdn-mlIk0N8bNBl5uSHs6YW5RPdE15Iy4IZRobwGgVDg9qGZ2-KnUcKnTp3m0GmDFaWKvfqzaIvPNlhXvttQegI_Z5epRgrZ1HCq43n1yHaLD2Eq-wSa7M81MH9HaAn9knklqNE7FbOp-ibpWrI";

export const MASTER_MATERIALS: MaterialItem[] = [
  {
    name: "Tivoli Travertine",
    description: "Locally sourced, unfilled travertine provides a porous, acoustic-dampening surface that grounds the structure, allowing tactile exploration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7KH51DSuthJqrB1bpEwALwR05fIFUNesa-x2w8JJSjgGav_N78roZME7rpm1_gOWcCJVIEg0gKuN_HUZpwB4IKTgVRthe7JLNgvF7MTAjDWaVecsh9KxdQW3UH5mRWr-vcAh3ayuVEFRDEUq6xMCSlMs2Z0IR5TxQHQS7nlzkDtKfjbmgkRg_tlTZl2b61esYmSzKy4LyMW2cjKojabw1AtOEKFS9GKnRdD52RR3jAc-7DWtK39zmmq_7b82uVmVj8qumh_5fT0w",
    alt: "Travertine Stone surface with porous texture"
  },
  {
    name: "Aged Bronze",
    description: "Living hand-rubbed metal finishes that react subtly over time to the coastal salty breeze, creating a rich natural patina.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDU0t4Fmdim3NYCJFkN9nf038QRBviZW_kCuOYcNewJHzsomRg_MKT7HCcgiKCcxGhukypfpwfu-uhBGQwUfeE15RY_YBIW3EzueQCo8FhpSNf_WLUHXl3J_FlXVDpOZi6X_BE-YqcQGvS8XUg1Fy-l70tY0Ca7musCRjsBDEivOy-IfZV5hVD0AtFNnTYadZDtLSBBDwLg7xXZHBgzAu3-JcZKPw2mzFAms3aZ6jchdNEEEP0AOWejEvSD0___U--HOrQBMoWSsI",
    alt: "Hand-crafted aged bronze luxury detail curves"
  },
  {
    name: "Cast Glass",
    description: "Artisanal hand-molded heavy fluted glass that scatters and diffuses harsh overhead coastline glares into soft, atmospheric indoor ambient illumination.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMt6unpFCQyMaS6mXBSbIFuYXfDsDq7P5lsCTrsOqZLwTeUZtbn3oYYsbKnl1KfMZW0uHZIF9xi4RDEp7pgS0Bz2tlc9Cu2Hk_AQQZo7sd02qEflQI6XE_581PX3CYbAWE7pbiSpL1LnP8c0tiAxHUE_6EdsVy04-pALUeInDrXrt1dD_Baw1KOyMHUV-R98ldWhEE3hX64ADQ5L0igNOjKgwkDrdzfqJBJJRktbSUHqhtXE_XRdGU5iLESS5FjDdjdKof-7Qh244",
    alt: "Translucent glass refracting warm lighting lines"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    num: "I",
    title: "Sensing Space",
    desc: "We look beyond standard geometry. Space is designed not as a set of dimensions, but as a container for atmosphere, light, and sensory encounters."
  },
  {
    num: "II",
    title: "Organic Materiality",
    desc: "Unfilled limestone, living bronze, raw wood. We prioritize tactile honesty where every single touch reveals the ancient memory of tectonic creation."
  },
  {
    num: "III",
    title: "Ecological Fusion",
    desc: "Passive thermal currents, natural orientation, and modern ventilation dissolve the false barrier between living inside and the comfort of your home."
  }
];
