import CardProjects from "../components/CardProjects";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
const projects = () => {
  return (
    <>
      <header>
        <title>Projects</title>
      </header>
      <main>
        <Link href="/">
          <a className="flex p-4">
            <img
              className="md:ml-48 md:pt-12 h-12 md:h-24"
              alt="home"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAALWklEQVR4nO2df3QU1RXHP3cmhGBEqqhV1AMip2CpWo2gCByhWizViIBrBJNARaAkAayoaFVYQFF+WYUIVvwJ4WdEUOCktHJEsVi08Qc9WDlikYpYqT8oCklIdm7/SAKzm53sbHY32Zj5nLPn7L4398198913596ZyQY8PDw8PDw8PDw8PDw8GhVpagcawpnjta+h3IPQq6ZpmwWzvlggW5vUsQbQrATolKdnVJnMFiWbML4rbLAs8vYvlM+awL0G0SwE6OfXlE+/Ih9lGtAuwuaHEeamn8rMnX452hj+xYLR1A5EonOe9vn3AUoNi8cMpZ2hYCiIssqArmLRzVRW17YbSrphMbXsAO90ztM+Te1/JJJ2BXTL1/aVyhRRCgj+onyMMn73k7LJvn2X32o/hEKgu61ZgaJAJXfteVq+bAS3oyb5BPCr8ZMvyEZ4FGhf2yxwRGGO1YqHdy+QinCmGWO01fdCngozgLbHOpSDAv5d31BIsQQSPocoSCoBuo7VSw14AugZ0rWBFAr++YTsdTVOgXYwjvIIQo69XeEDFfJ3PSl/jZfPsZIUAnQfpaeoyVShTrjZrcqEDxdLSYPGHaP9gULgp7ZmBYpMgzt3PCkHGu51fGhaAfxqXLiPbEuYJ3CqradMhNlHWjuHG7dkjNFWlUqewoPAibaugwL+rgcpLG7CsNRkAlw0SnuKsFAhI6hDWGdY3P7eM87h5sLbtK8Ik1GuqLHZpsqsHU87F2IXj9KOlsFjKDcE745SVfI+eEbejm1GDaPRBbhgnJ6cUoFfhHzAtHV9IjCx9BnZ6GTbY6SeETCZDeELMZQNppL3znPOhdjFo/QqUQoRugVZQpFaTHrvOflv1JOKgUYUQOXSW8kB5gKn2TrKgNknWjyy5XkpD2fZz68phz8jX5XpwEkRdnQYmFv2HTN3FocvxLr7NPWEkxinykNAem27wLcI0zodaryw1CgCXDZCMxAWqtTJbtZjMvHtp2WPk23PkdoXg0KUC+3tAqs0wBQrBTGqhbmJ4A12CORvf1bedBq7x63aWZTHgMwgU+VtlLztL0ip2zk2lIQK0G+k/qhcmIaGhBtlnwh3vPW8FDvZ9szV9qbJTFVGh/j5sQjj33ouuBC7fKT2EyjUkEJMoMhK4a7t9RRil4/UTOBx4FxbsyWw7Ggqd5Q+JV+5m3H0JEgAlT4jyFGYA5xu66gUWJRyhPu2FMv3YU39avTZQ7YSXIgBR0SY07YtD5fUU4i1KQ9TiMFBUfxnljmHll4+bWOmM1mVyUCaresbUaa/2ZkF+MVyMfmoiLsAfbL1IjF4Augd0rXZNCjY8rx85GTbO0cvNSR8IRaoomDbcneFWO9btYNRxSMQXIgBH4hF3htFss3J9ooRep6pPA5ca28X+LtC/tYl8c2W4ibA1T5tV5nGdKiT3Xyuyu/fKJIlTra9RukpqUeZSphCDGHC60saVohdmav90fCFWCXcuW2pcyF2ZY5mAvOBTrZmC1iWIvxu8xL5uiE+hRIHAVT6Z5MDzAZ+bOuoRFmkR53Djd+vxuu7yQbmEVqIwWwrxTkzckvGGG3V9gh5EqYQU/CfVlF/WGrTmskK9wCtbV1fK8zo14UF/hjDUkwC9M/Wrmb1N+zqkK7XFAo2L5MPnWwHDNcMqzrcXBbStSElwPg/rZRPY/EtlF/k6llGgIcJDUvCexogf/MKecvJ9pps7WIp8xUGhnRtVYuCzStkR0P9apAAA3I0nQB3AfcCqbau/QL3blruHG6uHa4nV4KfuqHqE7GYuGmlcyEWD355S00hRnAhplCUUsmkkmLnQmzAMM1UYYFAR1tzFbDQFB4oWSaHovUnagEGDtNMrb5ieY6tuRJhUWoa97/yrHwX3lJl4HByVMMUYsLs8tTYw41bfD5NPdSKcRJSiAHfqjDtpErnsJSZqSdUtuVutE5Y+o8Ik0uWsxRE3friWoCBt+jZYrEEpX/IAJsNoWD9Cufs5ldZ2qMmu+kR1KGsF5PbNy6Xf7n1I55cO1w7q8XjwHUhXdvFIH/jcudCLHOYdrOUQoWrgjqE19Qgt2SZ7HPjgysBBufo6YEKSlU429b8uQqTNqyUVU521/j0lFSDmcBogrObPapM3LBa1rvZf6K57ibNFKlTiAWApyyT+zYul28dbW/WLFHmAWfZmj+rssioL5zV4uqecOAofoGza+65VhrKXCnjfKeD7/erMShLb0sTdhnKWEMxamzLDZieZtE9WQ4+wIbVsj7NorsoMwylvMZX01DGmVXsGpSlv6kuqsPYrpRVUsb5hjK35thgKOekClPd7NvdCvDpPmoVVoaufVFectp2SJZegsVCrZvdlARgwivFstvNPpuK633axazO/4MyHql+9ih/XbG872Q7+EYdgrCm5uO+tcVyjtO2tnEjM/RGtWq3NYSUcCeo4cP15PKjPCgwluDsZi/K7WvWyDo3+0oWhvh0sCh/IDjjCQgsrKpiyrp1cjDUxudT01Kqaj5aa14UM3SbUFyFIFMRU8FUqHvwVbJu1NyqCj5KUfJMxazZttJU5hvCz5rbwQd4qVjWGsL5JkwzlYqaOZmGMj7VZLdvqI4JDUvFxRKoPU6muju2rlbAzUP0WFq18iU5ZpM1WC8SqXvdR+C1KpOC4mLnQqw54fNpF9NiPhpSiClbxaBgxZrjhZjTsXIixY0DRkhW6/Npu1ZVTAfy0KAx9gP3Ll/rXIg1R4qrz1u/HjZIM8VgAcfDUl8sSocP1oVSzgPLSuRQ6LGKhKsVkH3DcVVRRiB1rvuAMEsOM2Ppn+VwdC40L3IGaLqm8wDVl63tfKHKnSIsq20oWhd5BbgSIPd6PYAEVa91WPJy5J39kMgdpPV+1wW+fOFlOSPSOO5OwsJTJtWpje31uf1zS6O+Y2EChrDYzTiuBOj4P/yi+A3Ya8Bew+KhNql0sz0Q2+Kwz71NKt0Mi4cM2Gsoe0TxdzzINDfjxBQ2RmceX4aL17esEBSvubvKgpxoid/8WuI195gEMFuwAPGau7cCGkhSrABPgNjxBGggSSFAos8Bk66pv9hxy7xN8c/QWsQ5IJlXWFKsAE+A2ElqAWb9JXmLu6QQwKsDYiepV0AykxQroDEEeLSXtjmUxj3ALVQ/KBvp4msA2CNKkcIs/5bEPOwVr7nH9FMFib4a+mgvbfNdKq8ayhRDOa/mUREivExD6SLgN+BVfz9Ni7yn6InX3GMSwHYDOiGUtWZyClxh30+Ur96pyt2J8C1ec0/qECQBsm150P0VXzPHv7P+X0Dxd9fUtPbcrTCjpikbmB5v31pECDKhU+346enMjXTwAfw75egJ6cyx+XZuJJuGkBQhKNEC2GP+hBL3fzE/oUQqbL7FtMrr8S0uc0/qOiCW8ZPZNztJfQ6IZfxk9s2OJ0ATj+8J0MTjN/tzwKLL1V/7ftzf5Nj7ZPDNDc1+BRhW0B9CHBMgGXxzQ9wEWNwj/N2r0e80/JKyKwEctonXAXKaF8kmQCJIBgESPcdmfw5w2iZeviV6jnFbAbnvxv/uVTKsgJGl4ee15JL4PDDQ7EOQEP4h2GTwzQ2xCRAfH2IaP+fd46lntLaxEK/x43YOWPXzyEsy6/3owlRTXQtyMxcvC0pS22jxBIizbbTETYDB/2iaLCgRtkN3RJ7L2guSIAtKhjogEbaNOb4Xgpp4/KjDxurumnoizEDJAc6MjxvNnv0oS783mHKTi/vWdqJeASdZTIfEPOrRjOkATG6rKNU/4+aaqAUwldxobVoMyggSLYChx8NO6R+jtf5hkjH22NuoQ3JDBDhGh6T/J1GNQywnZE+AOBCLAK6yoDe7xKfoaGn02Z2g3wvyiB+eAB4eHh4eHh4eHh4eHh4ti/8DPYFuO6PMhi8AAAAASUVORK5CYII="
            />
            <p className="md:pt-10 md:mt-4 md:px-2 text-purple-600 text-3xl font-semibold">
              Home
            </p>
          </a>
        </Link>

        <CardProjects
          type="website"
          title="True or False Quiz"
          desc="This project is the project I used to learn to implement redux, you can see it in the features folder. This project uses the concept of mobile first."
          tech="ReactJs, Hooks, and Redux"
          link="http://true-false-quiz.vercel.app/"
          github="https://github.com/reskyppo/true-false-quiz"
          img="/images/Quiz.webp"
        />

        <CardProjects
          type="website"
          title="Covid-19 Tracker"
          desc="This website is used to give an information about covid-19"
          tech="ReactJs, Hooks, and Axios"
          link="https://covid-infografis.vercel.app/"
          github="https://github.com/reskyppo/covid_infografis"
          img="/images/Covid.webp"
        />

        <CardProjects
          type="website"
          title="Wikia Ghibli"
          desc="This website can provide you with all things Ghibli information"
          tech="ReactJs, Axios, and Tailwindcss"
          link="https://www.wikighibli.site/"
          github="https://github.com/reskyppo/ReactJs-ghibli-wikia"
          img="/images/Wikia.webp"
        />

        <CardProjects
          type="website"
          title="Personal Website"
          desc="This website is about me and posting my portfolio"
          tech="NextJs and Tailwindcss"
          link="https://reskyppo.vercel.app/"
          github="https://github.com/reskyppo/portofolio"
          img="/images/Portofolio.webp"
        />

        <CardProjects
          type="website"
          title="Fuzzy Logic Calculator"
          desc="This website helps you to calculate fuzzy logic easily"
          tech="NextJs and Tailwindcss"
          link="https://fuzlogcalc.vercel.app/"
          github="https://github.com/reskyppo/FuzzyLogic_Calculator"
          img="/images/Fuzzy.webp"
        />

        <CardProjects
          type="website"
          title="My Notes"
          desc="This website is used to record activities that will be carried
                  out so you don't forget."
          tech="ReactJs, Redux, and Firebase"
          link="https://mynotesjs.netlify.app/"
          github="https://github.com/reskyppo/ReactJs-My-Notes"
          img="/images/Notes.webp"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default projects;
