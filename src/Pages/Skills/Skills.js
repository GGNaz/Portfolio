import React, { useState } from "react";

import { motion, Variants } from "framer-motion";
import taraEatImg from "../../assets/projects/tara-eat-app.JPG";
import { projectList } from "./Projects";
const Skills = () => {
  const [isShowProjects, setShowProjects] = useState({
    category: null,
    isClick: false,
  });
  const openProjects = (data, isCliked) => {
    setShowProjects({ category: data, isClick: true });
  };

  return (
    <div className="bg-gray-600 p-5">


      <div >
        <div className="pt-8 text-center">
          <h1 className="text-4xl font-bold text-white inline-flex items-center mb-1">
            <span>My Skills</span>
          </h1>
        </div>
        <div className="container xl:max-w-7xl mx-auto px-4 py-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a onClick={() => openProjects("React Js",)} className="flex items-center justify-center cursor-pointer sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden" >
              <img alt="svgImg" className="transform transition ease-out group-hover:scale-110 h-96 p-10" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA4MCA4MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNNDYuNSw0MGMwLDMuNTkzLTIuOTA3LDYuNS02LjUsNi41cy02LjUtMi45MDctNi41LTYuNXMyLjkwNy02LjUsNi41LTYuNVM0Ni41LDM2LjQwNyw0Ni41LDQweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0ZTdhYjUiIGQ9Ik00MCw0N2MtMy44NTksMC03LTMuMTQtNy03czMuMTQxLTcsNy03czcsMy4xNCw3LDdTNDMuODU5LDQ3LDQwLDQ3eiBNNDAsMzRjLTMuMzA5LDAtNiwyLjY5MS02LDYgczIuNjkxLDYsNiw2czYtMi42OTEsNi02UzQzLjMwOSwzNCw0MCwzNHoiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjOGJiN2YwIiBkPSJNMjQuNDc0LDc1LjUwM2MtMS43MTEsMC0zLjI2OS0wLjM5Mi00LjYzMi0xLjE2NGMtMi4yOC0xLjI5My0zLjg1Ni0zLjUyMS00LjY4Ni02LjYyIGMtMC45NjUtMy42MDctMC44NS04LjM5OCwwLjMzMi0xMy44NzhDNS45NTYsNTAuNTYyLDAuNSw0NS41MzEsMC41LDQwYzAtNS41MzIsNS40NTUtMTAuNTYyLDE0Ljk4Ny0xMy44NCBjLTEuMTgyLTUuNDgxLTEuMjk4LTEwLjI3Mi0wLjMzMy0xMy44NzljMC44My0zLjEsMi40MDYtNS4zMjgsNC42ODUtNi42MmMxLjM2Mi0wLjc3MiwyLjkyMS0xLjE2NCw0LjYzMi0xLjE2NCBjNC4zODgsMCw5Ljg5MSwyLjczLDE1LjUzMSw3LjY5OGM1LjY0LTQuOTYzLDExLjE0MS03LjY5MSwxNS41MjQtNy42OTFjMS43MTEsMCwzLjI2OSwwLjM5Miw0LjYzMiwxLjE2NCBjMi4yNzcsMS4yOTEsMy44NTQsMy41MTUsNC42ODQsNi42MTFjMC45NjYsMy42MDYsMC44NSw4LjM5OC0wLjMzMywxMy44OEM3NC4wNDMsMjkuNDM3LDc5LjUsMzQuNDY4LDc5LjUsNDAgcy01LjQ1NywxMC41NjMtMTQuOTkxLDEzLjg0MmMxLjE4Miw1LjQ4MSwxLjI5OCwxMC4yNzIsMC4zMzIsMTMuODc4Yy0wLjgzLDMuMDk3LTIuNDA1LDUuMzIxLTQuNjgsNi42MTIgYy0xLjM2NCwwLjc3Mi0yLjkyMywxLjE2NC00LjYzMywxLjE2NGMtNC4zODYsMC05Ljg4OS0yLjcyOC0xNS41MjctNy42ODlDMzQuMzYxLDcyLjc3NCwyOC44NTksNzUuNTAzLDI0LjQ3NCw3NS41MDN6IE0xOS4zMzcsNTUuMDA2Yy0wLjk5MSw0LjcxNy0xLjEwMiw4Ljc0Ny0wLjMxNiwxMS42NzljMC41NDIsMi4wMjYsMS40ODEsMy40MzEsMi43OTQsNC4xNzVjMC43NTMsMC40MjcsMS42NDgsMC42NDQsMi42NTksMC42NDQgYzMuMzk0LDAsNy44NjItMi4yODIsMTIuNjIxLTYuNDM3Yy0yLjM4NS0yLjQwMi00LjcxMy01LjEyMS02LjkyOC04LjA5MUMyNi4zMzYsNTYuNTYsMjIuNjk2LDU1Ljg5OCwxOS4zMzcsNTUuMDA2eiBNNDIuOTA2LDY1LjA2NWM0Ljc1OCw0LjE1MSw5LjIyNyw2LjQzMSwxMi42MjEsNi40MzJjMS4wMTEsMCwxLjkwNi0wLjIxNywyLjY2MS0wLjY0NGMxLjMwOS0wLjc0MiwyLjI0Ni0yLjE0NCwyLjc4Ny00LjE2NyBjMC43ODYtMi45MzQsMC42NzYtNi45NjMtMC4zMTUtMTEuNjc5Yy0zLjM2MiwwLjg5Mi03LjAwMywxLjU1NC0xMC44MzMsMS45N0M0Ny42MTMsNTkuOTQ3LDQ1LjI4OCw2Mi42NjUsNDIuOTA2LDY1LjA2NXogTTM1LjU2Niw1Ny4zOTNjMS40NTIsMS43NzYsMi45MzgsMy40MzMsNC40MzQsNC45NGMxLjQ5Mi0xLjUwNiwyLjk3OS0zLjE2Myw0LjQzLTQuOTRDNDIuOTM5LDU3LjQ2NCw0MS40NTQsNTcuNSw0MCw1Ny41IEMzOC41NDUsNTcuNSwzNy4wNTksNTcuNDY0LDM1LjU2Niw1Ny4zOTN6IE0zMi4zNDksNTMuMTc5QzM0Ljg0NCw1My4zOTIsMzcuNDE3LDUzLjUsNDAsNTMuNWMyLjU4NSwwLDUuMTU1LTAuMTA4LDcuNjQ2LTAuMzIgYzEuNDg2LTIuMDg0LDIuOTAzLTQuMjY4LDQuMjE0LTYuNDk1YzEuMjY4LTIuMTU1LDIuNDYxLTQuNDA0LDMuNTQ3LTYuNjg2Yy0xLjA4My0yLjI3Ni0yLjI3NS00LjUyNC0zLjU0Ni02LjY4NCBjLTEuMzA4LTIuMjIyLTIuNzI1LTQuNDA2LTQuMjE1LTYuNDk1QzQ1LjE1NywyNi42MDgsNDIuNTg3LDI2LjUsNDAsMjYuNWMtMi41ODgsMC01LjE1OSwwLjEwOC03LjY0NywwLjMyMSBjLTEuNDksMi4wODYtMi45MDksNC4yNy00LjIxOSw2LjQ5NWMtMS4yNywyLjE1OS0yLjQ2Miw0LjQwNy0zLjU0Niw2LjY4NmMxLjA4MiwyLjI3NCwyLjI3NCw0LjUyMiwzLjU0NSw2LjY4NCBDMjkuNDM3LDQ4LjkwMSwzMC44NTQsNTEuMDg0LDMyLjM0OSw1My4xNzl6IE01Ny40OTEsNDQuNzc5Yy0wLjcwNiwxLjM0Ni0xLjQzOCwyLjY2Ni0yLjE4NSwzLjkzNCBjLTAuNzUzLDEuMjgyLTEuNTU0LDIuNTY4LTIuMzg2LDMuODM2YzIuMzc0LTAuMzY2LDQuNjQ1LTAuODM1LDYuNzcxLTEuNEM1OS4xMDEsNDkuMSw1OC4zNjIsNDYuOTYzLDU3LjQ5MSw0NC43Nzl6IE0yMC4zMDQsNTEuMTQ4YzIuMTI3LDAuNTY0LDQuMzk3LDEuMDM0LDYuNzY4LDEuNGMtMC44MzctMS4yNzYtMS42MzgtMi41NjMtMi4zODYtMy44MzVjLTAuNzQ1LTEuMjY3LTEuNDc4LTIuNTg1LTIuMTgzLTMuOTMxIEMyMS42MzYsNDYuOTU2LDIwLjg5OCw0OS4wOTEsMjAuMzA0LDUxLjE0OHogTTU5LjgxNiw0MGMxLjUyOCwzLjM5MSwyLjc3Myw2Ljc0MywzLjcwOCw5Ljk3N0M3MC45MjYsNDcuMzczLDc1LjUsNDMuNTc0LDc1LjUsNDAgcy00LjU3NC03LjM3My0xMS45NzYtOS45NzdDNjIuNTkxLDMzLjI1Nyw2MS4zNDUsMzYuNjA5LDU5LjgxNiw0MHogTTE2LjQ3MiwzMC4wMjVDOS4wNzMsMzIuNjI4LDQuNSwzNi40MjcsNC41LDQwIGMwLDMuNTc0LDQuNTczLDcuMzczLDExLjk3NCw5Ljk3NmMwLjkzNC0zLjIzNSwyLjE3OS02LjU4NywzLjcwNS05Ljk3NEMxOC42NTIsMzYuNjE0LDE3LjQwNywzMy4yNjIsMTYuNDcyLDMwLjAyNXogTTIwLjMwMywyOC44NTJjMC41OTQsMi4wNTQsMS4zMzIsNC4xOSwyLjIsNi4zNjhjMC43MDQtMS4zNDIsMS40MzYtMi42NjEsMi4xODQtMy45MzJjMC43NTItMS4yNzksMS41NTMtMi41NjUsMi4zODgtMy44MzYgQzI0LjcwMSwyNy44MTcsMjIuNDMxLDI4LjI4NywyMC4zMDMsMjguODUyeiBNNTIuOTIyLDI3LjQ1MWMwLjgzNywxLjI3NywxLjYzOCwyLjU2MywyLjM4NiwzLjgzNyBjMC43NDYsMS4yNjcsMS40NzksMi41ODYsMi4xODUsMy45MzJjMC44NjktMi4xNzcsMS42MDctNC4zMTMsMi4yMDEtNi4zNjlDNTcuNTY0LDI4LjI4Niw1NS4yOTQsMjcuODE2LDUyLjkyMiwyNy40NTF6IE0yNC40NzEsOC40OTdjLTEuMDExLDAtMS45MDUsMC4yMTYtMi42NTcsMC42NDRjLTEuMzEyLDAuNzQ0LTIuMjUyLDIuMTQ5LTIuNzk1LDQuMTc1Yy0wLjc4NSwyLjkzNS0wLjY3NSw2Ljk2NCwwLjMxNywxMS42NzkgYzMuMzYtMC44OTIsNy4wMDItMS41NTUsMTAuODM0LTEuOTcxYzIuMjE3LTIuOTcxLDQuNTQ1LTUuNjg4LDYuOTI3LTguMDg4QzMyLjMzNywxMC43NzksMjcuODY2LDguNDk3LDI0LjQ3MSw4LjQ5N3ogTTQ5LjgyOCwyMy4wMjNjMy44MywwLjQxNiw3LjQ3MSwxLjA3OCwxMC44MzMsMS45N2MwLjk5Mi00LjcxNiwxLjEwMy04Ljc0NiwwLjMxNi0xMS42OGMtMC41NDItMi4wMjItMS40OC0zLjQyNC0yLjc5LTQuMTY2IGMtMC43NTQtMC40MjctMS42NDktMC42NDQtMi42NjEtMC42NDRjLTMuMzkzLDAtNy44NiwyLjI4MS0xMi42MTksNi40MzNDNDUuMjg3LDE3LjMzNSw0Ny42MTMsMjAuMDUzLDQ5LjgyOCwyMy4wMjN6IE00MCwyMi41IGMxLjQ1NCwwLDIuOTM5LDAuMDM2LDQuNDMxLDAuMTA3Yy0xLjQ1LTEuNzc0LTIuOTM2LTMuNDMtNC40MjktNC45MzhjLTEuNDk3LDEuNTEtMi45ODIsMy4xNjYtNC40MzIsNC45MzggQzM3LjA2MSwyMi41MzYsMzguNTQ2LDIyLjUsNDAsMjIuNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNGU3YWI1IiBkPSJNMjQuNDcxLDQuOTk3YzQuNDk0LDAsOS45OTYsMi45MSwxNS41MzIsNy44NjdjNS41MzUtNC45NTMsMTEuMDM0LTcuODYsMTUuNTI0LTcuODYgYzEuNjIzLDAsMy4wOTksMC4zNyw0LjM4NiwxLjA5OWMyLjE1NiwxLjIyMiwzLjY1MiwzLjM0Myw0LjQ0Niw2LjMwNmMxLjA3NywzLjkxNywwLjg1MSw4Ljc0LTAuNDM0LDE0LjA4IEM3My4xNDcsMjkuNTcsNzksMzQuNDMxLDc5LDQwcy01Ljg1MywxMC40My0xNS4wNzYsMTMuNTEyYzEuMzQxLDUuNzczLDEuNTY2LDEwLjcyNiwwLjQzNCwxNC4wNzkgYy0wLjc5NCwyLjk2Mi0yLjI4OSw1LjA4NC00LjQ0Myw2LjMwNkM1OC42MjYsNzQuNjI3LDU3LjQ1NSw3NSw1NS44MzMsNzVjLTAuMDAxLDAtMC40MTYsMC0wLjQxNywwIGMtNC40OTIsMC05Ljg4Mi0yLjkxLTE1LjQxNi03Ljg2MWMtNS41MzUsNC45NTYtMTEuMDM1LDcuODY0LTE1LjUyNyw3Ljg2NGMtMS42MjMsMC0zLjA5OS0wLjM3LTQuMzg2LTEuMDk5IGMtMi4xNTgtMS4yMjUtMy42NTUtMy4zNDktNC40NDgtNi4zMTRjLTEuMTktMy43MTctMC45NS04LjYwMywwLjQzNC0xNC4wNzlDNi44NTIsNTAuNDI5LDEsNDUuNTY5LDEsNDAgYzAtNS41NjgsNS44NTItMTAuNDI5LDE1LjA3Mi0xMy41MTFDMTUuMzg1LDIzLjQzLDE0Ljk0NiwyMC41OSwxNC45MzEsMThjLTAuMDEyLTIuMDQ2LDAuMjY3LTMuOTQ5LDAuNzA3LTUuNTkgYzAuNzk0LTIuOTY2LDIuMjktNS4wOSw0LjQ0OC02LjMxNEMyMS4zNzIsNS4zNjYsMjIuODQ4LDQuOTk3LDI0LjQ3MSw0Ljk5NyBNMTguOTU4LDI1LjYxNGMzLjQ3Ny0wLjk1NSw3LjMzOC0xLjY3NywxMS40ODMtMi4xMTcgYzIuMzgyLTMuMjEsNC44NzUtNi4wOTYsNy4zODYtOC41ODRjLTQuODcyLTQuMzQ2LTkuNjE2LTYuOTE3LTEzLjM1Ni02LjkxN2MtMS4wOTksMC0yLjA3NSwwLjIzOC0yLjkwNCwwLjcwOSBjLTEuNDMzLDAuODEzLTIuNDUyLDIuMzItMy4wMzEsNC40ODFDMTcuNjc4LDE2LjM4OCwxNy44NzMsMjAuNzE2LDE4Ljk1OCwyNS42MTQgTTYxLjAzOSwyNS42MTMgYzEuMDg1LTQuODk4LDEuMjgtOS4yMjcsMC40MjItMTIuNDI5Yy0wLjU3OC0yLjE1Ny0xLjU5Ny0zLjY2MS0zLjAyNy00LjQ3MmMtMC44My0wLjQ3MS0xLjgwOS0wLjcwOS0yLjkwNy0wLjcwOSBjLTMuNzM3LDAtOC40NzgsMi41NjgtMTMuMzQ5LDYuOTFjMi41MSwyLjQ4OCw1LDUuMzc0LDcuMzgsOC41ODNDNTMuNzAxLDIzLjkzNiw1Ny41NjIsMjQuNjU4LDYxLjAzOSwyNS42MTMgTTM0LjQ3NywyMy4xNjYgYzEuODAyLTAuMTA3LDMuNjA5LTAuMiw1LjQ4OC0wLjJjMS44NzksMCwzLjc1NSwwLjA5NCw1LjU1NywwLjJjLTEuODA4LTIuMjc5LTMuNjY0LTQuMzYxLTUuNTIxLTYuMjA0IEMzOC4xNDQsMTguODA1LDM2LjI4NywyMC44ODcsMzQuNDc3LDIzLjE2NiBNNDAsNTRjMi43NjEsMCw1LjQwNC0wLjEyMSw3LjkxOC0wLjM0MmMxLjUxOS0yLjExNywyLjk4OC00LjM2NSw0LjM3Mi02LjcxOSBjMS4zNTMtMi4yOTksMi41NzctNC42MjYsMy42Ny02LjkzOWMtMS4wOTMtMi4zMTMtMi4zMTctNC42MzktMy42NjktNi45MzdjLTEuMzg1LTIuMzU1LTIuODUzLTQuNjAyLTQuMzczLTYuNzE5IEM0NS40MDUsMjYuMTIxLDQyLjc2MiwyNiw0MCwyNnMtNS40MDYsMC4xMjEtNy45MiwwLjM0M2MtMS41MjEsMi4xMTctMi45OTEsNC4zNjUtNC4zNzYsNi43MTkgYy0xLjM1MiwyLjI5OS0yLjU3Niw0LjYyNi0zLjY2OSw2LjkzOWMxLjA5MywyLjMxMywyLjMxNiw0LjYzOSwzLjY2OCw2LjkzN2MxLjM4NSwyLjM1NCwyLjg1NCw0LjYwMiw0LjM3NCw2LjcxOSBDMzQuNTkyLDUzLjg3OSwzNy4yMzcsNTQsNDAsNTQgTTU3LjU0NiwzNi40MTNjMS4xMjUtMi43MDksMi4wNTYtNS4zNjksMi43NjYtNy45MTNjLTIuNTUzLTAuNzAyLTUuMzczLTEuMjgyLTguNDI4LTEuNzA3IGMxLjAyOCwxLjUyNywyLjAyOSwzLjExLDIuOTkyLDQuNzQ4QzU1LjgzLDMzLjE2LDU2LjcxNywzNC43ODgsNTcuNTQ2LDM2LjQxMyBNMjIuNDQ5LDM2LjQxNGMwLjgyOC0xLjYyNSwxLjcxNi0zLjI1MywyLjY2OC00Ljg3MyBjMC45NjQtMS42MzgsMS45NjYtMy4yMiwyLjk5NS00Ljc0N2MtMy4wNTUsMC40MjQtNS44NzUsMS4wMDUtOC40MjgsMS43MDdDMjAuMzk0LDMxLjA0NSwyMS4zMjUsMzMuNzA0LDIyLjQ0OSwzNi40MTQgTTYzLjE4OCw1MC42MjJDNzEuMjY0LDQ3Ljg4Niw3Niw0My44NjYsNzYsNDBzLTQuNzM2LTcuODg2LTEyLjgxMi0xMC42MjJjLTAuOTUzLDMuNDA1LTIuMjY5LDYuOTgzLTMuOTIsMTAuNjIxIEM2MC45MTksNDMuNjM4LDYyLjIzNSw0Ny4yMTYsNjMuMTg4LDUwLjYyMiBNMTYuODEsNTAuNjIxYzAuOTUyLTMuNDA0LDIuMjY3LTYuOTgyLDMuOTE4LTEwLjYxOSBjLTEuNjUxLTMuNjM4LTIuOTY3LTcuMjE3LTMuOTE5LTEwLjYyMkM4LjczNCwzMi4xMTYsNCwzNi4xMzUsNCw0MEM0LDQzLjg2Niw4LjczNSw0Ny44ODUsMTYuODEsNTAuNjIxIE01MS44ODQsNTMuMjA3IGMzLjA1NS0wLjQyNCw1Ljg3NS0xLjAwNCw4LjQyOC0xLjcwN2MtMC43MTEtMi41NDQtMS42NDItNS4yMDQtMi43NjYtNy45MTRjLTAuODI5LDEuNjI1LTEuNzE3LDMuMjUzLTIuNjcsNC44NzMgQzUzLjkxMyw1MC4wOTcsNTIuOTEyLDUxLjY4LDUxLjg4NCw1My4yMDcgTTI4LjEwOSw1My4yMDZjLTEuMDI4LTEuNTI3LTIuMDI5LTMuMTA5LTIuOTkzLTQuNzQ2IGMtMC45NTItMS42MTktMS44MzktMy4yNDYtMi42NjctNC44N2MtMS4xMjQsMi43MDgtMi4wNTQsNS4zNjctMi43NjQsNy45MUMyMi4yMzcsNTIuMjAxLDI1LjA1Niw1Mi43ODEsMjguMTA5LDUzLjIwNiBNMjQuNDc0LDcyLjAwM2MzLjczOSwwLDguNDgxLTIuNTcsMTMuMzUyLTYuOTE0Yy0yLjUxMy0yLjQ4OS01LjAwNS01LjM3Ni03LjM4OC04LjU4N2MtNC4xNDMtMC40MzktOC4wMDItMS4xNjEtMTEuNDc4LTIuMTE2IGMtMS4wODQsNC44OTgtMS4yNzksOS4yMjYtMC40MjIsMTIuNDI4YzAuNTc4LDIuMTYsMS41OTgsMy42NjcsMy4wMyw0LjQ4QzIyLjM5Niw3MS43NjUsMjMuMzc1LDcyLjAwMywyNC40NzQsNzIuMDAzIE01NS41MjcsNzEuOTk3TDU1LjUyNyw3MS45OTdjMS4wOTksMCwyLjA3Ni0wLjIzOCwyLjkwNy0wLjcwOWMxLjQzLTAuODExLDIuNDQ3LTIuMzE1LDMuMDI0LTQuNDczIGMwLjg1OC0zLjIwMywwLjY2My03LjUzMS0wLjQyMS0xMi40MjhjLTMuNDc3LDAuOTU1LTcuMzM3LDEuNjc3LTExLjQ4MSwyLjExNmMtMi4zOCwzLjIxLTQuODcxLDYuMDk2LTcuMzgxLDguNTg1IEM0Ny4wNDYsNjkuNDI4LDUxLjc4OCw3MS45OTYsNTUuNTI3LDcxLjk5NyBNNDAsNjMuMDRjMS44NTctMS44NDQsMy43MTMtMy45MjcsNS41MjItNi4yMDZjLTEuODAxLDAuMTA3LTMuNTU5LDAuMzMzLTUuNDM5LDAuMzMzIGMtMS44ODEsMC0zLjgwNy0wLjIyNi01LjYwOS0wLjMzM0MzNi4yODQsNTkuMTE0LDM4LjE0Miw2MS4xOTcsNDAsNjMuMDQgTTI0LjExNiw0LjA3MmMtMS43OTksMC0zLjA4NSwwLjMzOC00LjUyMywxLjE1MyBjLTIuMzk5LDEuMzYxLTQuMDU1LDMuNjkxLTQuOTIxLDYuOTI2Yy0wLjk2LDMuNTg3LTAuODc3LDguMzAyLDAuMjM2LDEzLjY4MUM1LjQxOSwyOS4xODksMCwzNC4zMjUsMCw0MCBjMCw1LjY3Niw1LjQyLDEwLjgxMSwxNC45MDksMTQuMTY4Yy0xLjExMyw1LjM3OS0xLjE5NiwxMC4wOTQtMC4yMzUsMTMuNjgxYzAuODY1LDMuMjMzLDIuNTIsNS41NjMsNC45MjEsNi45MjYgYzEuNDQsMC44MTYsMy4xNywxLjE2Myw0Ljk2OCwxLjE2M2M0LjQ4NywwLDkuNzUzLTIuNTM1LDE1LjQzOC03LjQ2NmM1LjY4NCw0LjkyNiwxMS4wMzksNy41MjQsMTUuNTI1LDcuNTI1IGMxLjc5OSwwLDMuNDQxLTAuNDEzLDQuODgxLTEuMjI5YzIuMzk3LTEuMzU5LDQuMDUxLTMuNjg2LDQuOTE2LTYuOTE3YzAuOTYxLTMuNTg4LDAuODc4LTguMzAzLTAuMjM1LTEzLjY4MSBDNzQuNTc5LDUwLjgxMiw4MCw0NS42NzYsODAsNDBzLTUuNDItMTAuODEyLTE0LjkxMS0xNC4xNjljMS4xMTQtNS4zOCwxLjE5Ni0xMC4wOTUsMC4yMzUtMTMuNjgyIGMtMC44NjYtMy4yMzEtMi41MjEtNS41NTgtNC45MTktNi45MTdjLTEuNDM5LTAuODE1LTMuMDgxLTEuMjI5LTQuODc5LTEuMjI5Yy00LjQ4NSwwLTkuODM5LDIuNTk5LTE1LjUyNCw3LjUyNyBjLTUuNjg2LTQuOTMyLTExLjA2Ni03LjQ2MS0xNS41NTQtNy40NjFMMjQuMTE2LDQuMDcyeiBNMTkuNzIsMjQuMzc3Yy0wLjQ2Mi0yLjMyNC0wLjc3Mi00LjUwMi0wLjc4OS02LjQxMiBjLTAuMDE1LTEuNzIsMC4yMjEtMy4yMTcsMC41Ny00LjUyMWMwLjUwNy0xLjg5MiwxLjM2OC0zLjE5NCwyLjU1OS0zLjg3YzAuNjc2LTAuMzg0LDEuNS0wLjY0NCwyLjQyMy0wLjY0NCBjMy4xODEsMCw3LjM2NywyLjE3OCwxMS44ODMsNi4wMzRjLTIuMjIxLDIuMjczLTQuMzkyLDQuODE5LTYuNDY2LDcuNTg1QzI2LjMxNSwyMi45NDksMjIuODk3LDIzLjU2MiwxOS43MiwyNC4zNzdMMTkuNzIsMjQuMzc3eiBNNDMuNjM4LDE0Ljk2NmM0LjUxNS0zLjg1Myw4LjcxMS01Ljk2MywxMS44ODgtNS45NjNjMC45MjQsMCwxLjczNywwLjE5NSwyLjQxNCwwLjU3OWMxLjE4OSwwLjY3NCwyLjA0OSwxLjk3MywyLjU1NSwzLjg2MSBjMC44NzQsMi44MTgsMC43NjEsNi41NjQtMC4yMTgsMTAuOTMzYy0zLjE3Ny0wLjgxNC02LjU5NC0xLjQyOC0xMC4xNzgtMS44MjZDNDguMDI2LDE5Ljc4NSw0NS44NTcsMTcuMjM5LDQzLjYzOCwxNC45NjYgTDQzLjYzOCwxNC45NjZ6IE0zNi42NzMsMjIuMDZjMS4wOTYtMS4zLDIuMjA5LTIuNTMsMy4zMjgtMy42NzhjMS4xMTksMS4xNDgsMi4yMzEsMi4zNzgsMy4zMjYsMy42NzggQzQyLjIwOCwyMi4wMiw0MS4wOTUsMjIsNDAsMjJTMzcuNzkzLDIyLjAyLDM2LjY3MywyMi4wNkwzNi42NzMsMjIuMDZ6IE0zMi42MjUsMjcuM2MyLjQwNS0wLjE5OSw0Ljg4My0wLjM0MSw3LjM3NS0wLjM0MSBjMi40OTEsMCw0Ljk2OSwwLjE0Miw3LjM3MywwLjM0MWMxLjQzMiwyLjAxOSwyLjc5Niw0LjEyNiw0LjA1Niw2LjI2OWMxLjIyMiwyLjA3OCwyLjM3Myw0LjIzOSwzLjQyMyw2LjQzIGMtMS4wNTEsMi4xOTItMi4yMDIsNC4zNTQtMy40MjQsNi40MzJjLTEuMjYxLDIuMTQ0LTIuNjI0LDQuMjUtNC4wNTYsNi4yNjljLTIuNDAzLDAuMTk5LTQuODgxLDAuNDY2LTcuMzcyLDAuNDY2IGMtMi40OTMsMC00Ljk3Mi0wLjI2OC03LjM3OC0wLjQ2N2MtMS40MzMtMi4wMTgtMi43OTctNC4xMjUtNC4wNTgtNi4yNjljLTEuMjIyLTIuMDc3LTIuMzcyLTQuMjM4LTMuNDIyLTYuNDMgYzEuMDUtMi4xOTIsMi4yMDEtNC4zNTQsMy40MjMtNi40MzJDMjkuODI3LDMxLjQyNSwzMS4xOTIsMjkuMzE4LDMyLjYyNSwyNy4zTDMyLjYyNSwyNy4zeiBNNTcuNDIyLDM0LjAyNCBjLTAuNTQ5LTEuMDE4LTEuMTEyLTIuMDE4LTEuNjgzLTIuOTljLTAuNTctMC45NjktMS4xNjctMS45NDItMS43ODUtMi45MDljMS43NzQsMC4zMDIsMy40ODUsMC42NjMsNS4xMTQsMS4wOCBDNTguNjAxLDMwLjc3MSw1OC4wNSwzMi4zODMsNTcuNDIyLDM0LjAyNEw1Ny40MjIsMzQuMDI0eiBNMjAuOTI4LDI5LjIwNWMxLjYyOS0wLjQxNywzLjM0LTAuNzc4LDUuMTE0LTEuMDggYy0wLjYxOSwwLjk2Ny0xLjIxNiwxLjk0LTEuNzg2LDIuOTA4Yy0wLjU3MSwwLjk3Mi0xLjEzNCwxLjk3Mi0xLjY4MywyLjk5QzIxLjk0NSwzMi4zODQsMjEuMzk1LDMwLjc3MiwyMC45MjgsMjkuMjA1IEwyMC45MjgsMjkuMjA1eiBNNjAuMzY1LDM5Ljk5OWMxLjQxNS0zLjE2MiwyLjU4Ny02LjI5MiwzLjQ5LTkuMzI2QzcwLjc1OCwzMy4xOTIsNzUsMzYuNzIxLDc1LDQwcy00LjI0Miw2LjgwOC0xMS4xNDUsOS4zMjcgQzYyLjk1MSw0Ni4yOTIsNjEuNzgsNDMuMTYxLDYwLjM2NSwzOS45OTlMNjAuMzY1LDM5Ljk5OXogTTE2LjE0Miw0OS4zMjZDOS4yNDEsNDYuODA3LDUsNDMuMjc4LDUsNDBzNC4yNDEtNi44MDcsMTEuMTQxLTkuMzI2IGMwLjkwMywzLjAzNSwyLjA3NCw2LjE2NSwzLjQ4OSw5LjMyN0MxOC4yMTYsNDMuMTYyLDE3LjA0NSw0Ni4yOTIsMTYuMTQyLDQ5LjMyNkwxNi4xNDIsNDkuMzI2eiBNNTMuOTUzLDUxLjg3NiBjMC42MTgtMC45NjgsMS4yMTYtMS45NDEsMS43ODUtMi45MDljMC41NzItMC45NzIsMS4xMzUtMS45NzMsMS42ODQtMi45OTFjMC42MjgsMS42NDEsMS4xNzgsMy4yNTQsMS42NDYsNC44MjEgQzU3LjQzOCw1MS4yMTIsNTUuNzI3LDUxLjU3NCw1My45NTMsNTEuODc2TDUzLjk1Myw1MS44NzZ6IE0yMC45MjksNTAuNzk1YzAuNDY3LTEuNTY2LDEuMDE3LTMuMTc3LDEuNjQ0LTQuODE2IGMwLjU0OCwxLjAxNywxLjExMSwyLjAxNywxLjY4MiwyLjk4OGMwLjU2OSwwLjk2OCwxLjE2NiwxLjk0LDEuNzg1LDIuOTA4QzI0LjI2Nyw1MS41NzIsMjIuNTU3LDUxLjIxMSwyMC45MjksNTAuNzk1IEwyMC45MjksNTAuNzk1eiBNMjQuNDc0LDcxLjAwM2MtMC45MjQsMC0xLjczNi0wLjE5NS0yLjQxMy0wLjU3OWMtMS4xOS0wLjY3Ni0yLjA1MS0xLjk3Ny0yLjU1Ny0zLjg2OSBjLTAuODMxLTIuODQ1LTAuNzM3LTYuNTkyLDAuMjE4LTEwLjkzM2MzLjE3NiwwLjgxNCw2LjU5MiwxLjQyOCwxMC4xNzUsMS44MjZjMi4wNzUsMi43NjYsNC4yNDYsNS4zMTMsNi40NjgsNy41ODggQzMxLjg1LDY4Ljg5MywyNy42NTMsNzEuMDA0LDI0LjQ3NCw3MS4wMDNMMjQuNDc0LDcxLjAwM0wyNC40NzQsNzEuMDAzeiBNNTAuMDk4LDU3LjQ1YzMuNTg0LTAuMzk5LDcuMDAxLTEuMDEyLDEwLjE3OC0xLjgyNiBjMS4xMDUsNC43NCwxLjE5Miw4LjUxOCwwLjIxNywxMC45MzJjLTAuNTA1LDEuODg5LTEuMzY0LDMuMTg4LTIuNTUyLDMuODYxYy0wLjY3OCwwLjM4NC0xLjQ5LDAuNTc5LTIuNDEzLDAuNTc5djFsLTAuMDAxLTEgYy0zLjE4LDAtNy4zNzctMi4xMS0xMS44OTEtNS45NjFDNDUuODU2LDYyLjc2Miw0OC4wMjUsNjAuMjE2LDUwLjA5OCw1Ny40NUw1MC4wOTgsNTcuNDV6IE00MCw2MS42MiBjLTEuMTItMS4xNDgtMi4yMzQtMi4zNzktMy4zMy0zLjY4QzM3Ljc5LDU3Ljk4LDM4LjkwNCw1OCw0MCw1OGMxLjA5NSwwLDIuMjA4LTAuMDIsMy4zMjctMC4wNiBDNDIuMjMyLDU5LjI0MSw0MS4xMTksNjAuNDcyLDQwLDYxLjYyTDQwLDYxLjYyeiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
              {/* <img src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="Product Image" className="transform transition ease-out group-hover:scale-110"/> */}
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 mt-60 px-4 hover-bordered bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-gray-600">
                  View React Js projects
                </div>
              </div>
            </a>
            <a className="flex items-center justify-center cursor-pointer modal-button sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden" htmlFor="my-modal-5">
              <img alt="svgImg" className="transform transition ease-out group-hover:scale-110 h-96 p-10" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMjFhMzY2IiBkPSJNMjQuMDA3LDQ1LjQxOWMtMC41NzQsMC0xLjE0My0wLjE1LTEuNjQ2LTAuNDRsLTUuMjQtMy4xMDNjLTAuNzgzLTAuNDM4LTAuNDAxLTAuNTkzLTAuMTQzLTAuNjgyCWMxLjA0NC0wLjM2NSwxLjI1NS0wLjQ0OCwyLjM2OS0xLjA4MWMwLjExNy0wLjA2NywwLjI3LTAuMDQzLDAuMzksMC4wMjhsNC4wMjYsMi4zODljMC4xNDUsMC4wNzksMC4zNTIsMC4wNzksMC40ODYsMGwxNS42OTctOS4wNjEJYzAuMTQ1LTAuMDgzLDAuMjQtMC4yNTEsMC4yNC0wLjQyNFYxNC45MzJjMC0wLjE4MS0wLjA5NC0wLjM0Mi0wLjI0My0wLjQzMkwyNC4yNTMsNS40NDZjLTAuMTQ1LTAuMDg2LTAuMzM4LTAuMDg2LTAuNDgzLDAJTDguMDgyLDE0LjQ5OWMtMC4xNTIsMC4wODYtMC4yNDksMC4yNTUtMC4yNDksMC40Mjh2MTguMTE0YzAsMC4xNzMsMC4wOTQsMC4zMzgsMC4yNDQsMC40Mmw0LjI5OSwyLjQ4MwljMi4zMzQsMS4xNjcsMy43Ni0wLjIwOCwzLjc2LTEuNTkxVjE2LjQ3NmMwLTAuMjU1LDAuMi0wLjQ1MiwwLjQ1Ni0wLjQ1MmgxLjk4OGMwLjI0OCwwLDAuNDUyLDAuMTk2LDAuNDUyLDAuNDUydjE3Ljg4NgljMCwzLjExMi0xLjY5Nyw0LjktNC42NDgsNC45Yy0wLjkwOCwwLTEuNjIzLDAtMy42MTktMC45ODJsLTQuMTE4LTIuMzczQzUuNjI5LDM1LjMxNyw1LDM0LjIxNiw1LDMzLjA0MlYxNC45MjgJYzAtMS4xNzksMC42MjktMi4yNzksMS42NDYtMi44NjFMMjIuMzYsMy4wMDJjMC45OTQtMC41NjIsMi4zMTQtMC41NjIsMy4zMDEsMGwxNS42OTQsOS4wNjlDNDIuMzY3LDEyLjY1Niw0MywxMy43NTMsNDMsMTQuOTMyCXYxOC4xMTRjMCwxLjE3NS0wLjYzMywyLjI3MS0xLjY0NiwyLjg2MUwyNS42Niw0NC45NzFjLTAuNTAzLDAuMjkxLTEuMDczLDAuNDQtMS42NTQsMC40NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyMWEzNjYiIGQ9Ik0yOC44NTYsMzIuOTM3Yy02Ljg2OCwwLTguMzA4LTMuMTUzLTguMzA4LTUuNzk3YzAtMC4yNTEsMC4yMDMtMC40NTIsMC40NTUtMC40NTJoMi4wMjgJYzAuMjI0LDAsMC40MTMsMC4xNjMsMC40NDgsMC4zODRjMC4zMDYsMi4wNjYsMS4yMTgsMy4xMDgsNS4zNzEsMy4xMDhjMy4zMDgsMCw0LjcxNS0wLjc0Nyw0LjcxNS0yLjUwMgljMC0xLjAxLTAuNDAxLTEuNzYtNS41NC0yLjI2M2MtNC4yOTktMC40MjQtNi45NTUtMS4zNzEtNi45NTUtNC44MDljMC0zLjE2NywyLjY3Mi01LjA1Myw3LjE0Ny01LjA1MwljNS4wMjYsMCw3LjUxNywxLjc0NSw3LjgzMSw1LjQ5M2MwLjAxMiwwLjEzLTAuMDM1LDAuMjU1LTAuMTIyLDAuMzVjLTAuMDg2LDAuMDktMC4yMDgsMC4xNDUtMC4zMzQsMC4xNDVoLTIuMDM5CWMtMC4yMTIsMC0wLjM5Ny0wLjE0OS0wLjQ0LTAuMzU0Yy0wLjQ5MS0yLjE3My0xLjY3OC0yLjg2OC00LjkwNC0yLjg2OGMtMy42MTEsMC00LjAzMSwxLjI1Ny00LjAzMSwyLjIJYzAsMS4xNDMsMC40OTUsMS40NzcsNS4zNjcsMi4xMjJjNC44MjUsMC42NCw3LjExNiwxLjU0NCw3LjExNiw0LjkzNWMwLDMuNDE4LTIuODUzLDUuMzc5LTcuODI3LDUuMzc5Ij48L3BhdGg+PC9zdmc+" /> <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="group-hover: border-white py-3 mt-60 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-gray-600">
                  View Node Js projects
                </div>
              </div>
            </a>
            <a className="flex items-center justify-center cursor-pointer modal-button sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden" htmlFor="my-modal-5">
              <img alt="svgImg" className=" transform transition ease-out group-hover:scale-110 h-96 p-10" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMjQsMzRDMTEuMSwzNCwxLDI5LjYsMSwyNGMwLTUuNiwxMC4xLTEwLDIzLTEwYzEyLjksMCwyMyw0LjQsMjMsMTBDNDcsMjkuNiwzNi45LDM0LDI0LDM0eiBNMjQsMTYJYy0xMi42LDAtMjEsNC4xLTIxLDhjMCwzLjksOC40LDgsMjEsOHMyMS00LjEsMjEtOEM0NSwyMC4xLDM2LjYsMTYsMjQsMTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTE1LjEsNDQuNmMtMSwwLTEuOC0wLjItMi42LTAuN0M3LjYsNDEuMSw4LjksMzAuMiwxNS4zLDE5bDAsMGMzLTUuMiw2LjctOS42LDEwLjMtMTIuNGMzLjktMyw3LjQtMy45LDkuOC0yLjUJYzIuNSwxLjQsMy40LDQuOSwyLjgsOS44Yy0wLjYsNC42LTIuNiwxMC01LjYsMTUuMmMtMyw1LjItNi43LDkuNi0xMC4zLDEyLjRDMTkuNyw0My41LDE3LjIsNDQuNiwxNS4xLDQ0LjZ6IE0zMi45LDUuNAljLTEuNiwwLTMuNywwLjktNiwyLjdjLTMuNCwyLjctNi45LDYuOS05LjgsMTEuOWwwLDBjLTYuMywxMC45LTYuOSwyMC4zLTMuNiwyMi4yYzEuNywxLDQuNSwwLjEsNy42LTIuM2MzLjQtMi43LDYuOS02LjksOS44LTExLjkJYzIuOS01LDQuOC0xMC4xLDUuNC0xNC40YzAuNS00LTAuMS02LjgtMS44LTcuOEMzNCw1LjYsMzMuNSw1LjQsMzIuOSw1LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTMzLDQ0LjZjLTUsMC0xMi4yLTYuMS0xNy42LTE1LjZDOC45LDE3LjgsNy42LDYuOSwxMi41LDQuMWwwLDBDMTcuNCwxLjMsMjYuMiw3LjgsMzIuNywxOQljMyw1LjIsNSwxMC42LDUuNiwxNS4yYzAuNyw0LjktMC4zLDguMy0yLjgsOS44QzM0LjcsNDQuNCwzMy45LDQ0LjYsMzMsNDQuNnogTTEzLjUsNS44Yy0zLjMsMS45LTIuNywxMS4zLDMuNiwyMi4yCWM2LjMsMTAuOSwxNC4xLDE2LjEsMTcuNCwxNC4yYzEuNy0xLDIuMy0zLjgsMS44LTcuOGMtMC42LTQuMy0yLjUtOS40LTUuNC0xNC40QzI0LjYsOS4xLDE2LjgsMy45LDEzLjUsNS44TDEzLjUsNS44eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjQiIGZpbGw9IiM4MGRlZWEiPjwvY2lyY2xlPjwvc3ZnPg==" /> <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0"></div>
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 mt-60 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-gray-600">
                  View React Native projects
                </div>
              </div>
            </a>


          </div>
        </div>
      </div>
      {
        isShowProjects.isClick ? (
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          >
            <div className="pt-8 text-center">
              <h1 className="text-4xl font-bold text-white inline-flex items-center mb-1">
                <span>{isShowProjects.category} Projects</span>
              </h1>

            </div>

            <div className="bg-white m-10 rounded-box">
              {
                projectList?.length > 0 &&
                projectList?.map((data) => {
                  const { title, features, image, appLink } = data
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto p-10 ">
                      <div className="flex items-center text-center lg:text-left">
                        <div className="space-y-2">
                          <div>
                            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-gray-700">
                              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                                {title}
                              </h2>
                            </div>
                            <h3>Features of this app: </h3>
                            <ul className="steps steps-vertical">
                              {
                                features?.map((feat) => {
                                  const { label } = feat
                                  return (

                                    <li className="step step-warning">
                                      {label}
                                    </li>

                                  )
                                })
                              }
                            </ul>
                            <div className="display justify-center">
                              <a href="https://www.facebook.com/RazenSe" target="_blank" > <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAzMiAzMiIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMTYgNCBDIDkuMzcxMDk0IDQgNCA5LjM3MTA5NCA0IDE2IEMgNCAyMS4zMDA3ODEgNy40Mzc1IDI1LjgwMDc4MSAxMi4yMDcwMzEgMjcuMzg2NzE5IEMgMTIuODA4NTk0IDI3LjQ5NjA5NCAxMy4wMjczNDQgMjcuMTI4OTA2IDEzLjAyNzM0NCAyNi44MDg1OTQgQyAxMy4wMjczNDQgMjYuNTIzNDM4IDEzLjAxNTYyNSAyNS43Njk1MzEgMTMuMDExNzE5IDI0Ljc2OTUzMSBDIDkuNjcxODc1IDI1LjQ5MjE4OCA4Ljk2ODc1IDIzLjE2MDE1NiA4Ljk2ODc1IDIzLjE2MDE1NiBDIDguNDIxODc1IDIxLjc3MzQzOCA3LjYzNjcxOSAyMS40MDIzNDQgNy42MzY3MTkgMjEuNDAyMzQ0IEMgNi41NDY4NzUgMjAuNjYwMTU2IDcuNzE4NzUgMjAuNjc1NzgxIDcuNzE4NzUgMjAuNjc1NzgxIEMgOC45MjE4NzUgMjAuNzYxNzE5IDkuNTU0Njg4IDIxLjkxMDE1NiA5LjU1NDY4OCAyMS45MTAxNTYgQyAxMC42MjUgMjMuNzQ2MDk0IDEyLjM2MzI4MSAyMy4yMTQ4NDQgMTMuMDQ2ODc1IDIyLjkxMDE1NiBDIDEzLjE1NjI1IDIyLjEzMjgxMyAxMy40Njg3NSAyMS42MDU0NjkgMTMuODA4NTk0IDIxLjMwNDY4OCBDIDExLjE0NDUzMSAyMS4wMDM5MDYgOC4zNDM3NSAxOS45NzI2NTYgOC4zNDM3NSAxNS4zNzUgQyA4LjM0Mzc1IDE0LjA2MjUgOC44MTI1IDEyLjk5MjE4OCA5LjU3ODEyNSAxMi4xNTIzNDQgQyA5LjQ1NzAzMSAxMS44NTE1NjMgOS4wNDI5NjkgMTAuNjI4OTA2IDkuNjk1MzEzIDguOTc2NTYzIEMgOS42OTUzMTMgOC45NzY1NjMgMTAuNzAzMTI1IDguNjU2MjUgMTIuOTk2MDk0IDEwLjIwNzAzMSBDIDEzLjk1MzEyNSA5Ljk0MTQwNiAxNC45ODA0NjkgOS44MDg1OTQgMTYgOS44MDQ2ODggQyAxNy4wMTk1MzEgOS44MDg1OTQgMTguMDQ2ODc1IDkuOTQxNDA2IDE5LjAwMzkwNiAxMC4yMDcwMzEgQyAyMS4yOTY4NzUgOC42NTYyNSAyMi4zMDA3ODEgOC45NzY1NjMgMjIuMzAwNzgxIDguOTc2NTYzIEMgMjIuOTU3MDMxIDEwLjYyODkwNiAyMi41NDY4NzUgMTEuODUxNTYzIDIyLjQyMTg3NSAxMi4xNTIzNDQgQyAyMy4xOTE0MDYgMTIuOTkyMTg4IDIzLjY1MjM0NCAxNC4wNjI1IDIzLjY1MjM0NCAxNS4zNzUgQyAyMy42NTIzNDQgMTkuOTg0Mzc1IDIwLjg0NzY1NiAyMC45OTYwOTQgMTguMTc1NzgxIDIxLjI5Njg3NSBDIDE4LjYwNTQ2OSAyMS42NjQwNjMgMTguOTg4MjgxIDIyLjM5ODQzOCAxOC45ODgyODEgMjMuNTE1NjI1IEMgMTguOTg4MjgxIDI1LjEyMTA5NCAxOC45NzY1NjMgMjYuNDE0MDYzIDE4Ljk3NjU2MyAyNi44MDg1OTQgQyAxOC45NzY1NjMgMjcuMTI4OTA2IDE5LjE5MTQwNiAyNy41MDM5MDYgMTkuODAwNzgxIDI3LjM4NjcxOSBDIDI0LjU2NjQwNiAyNS43OTY4NzUgMjggMjEuMzAwNzgxIDI4IDE2IEMgMjggOS4zNzEwOTQgMjIuNjI4OTA2IDQgMTYgNCBaIj48L3BhdGg+PC9zdmc+" />
                              </a>
                            </div>

                            {/* <ul></ul> */}
                          </div>
                        </div>
                      </div>
                      <div className=" items-center lg:justify-end text-blue-500 grid grid-flow-row">
                        <div className="mockup-phone border-warning">
                          <div className="camera"></div>
                          <div className="display">
                            <div className="artboard artboard-demo phone-1">
                              <img src={image} alt={title} />
                            </div>
                          </div>
                        </div>



                      </div>
                    </div>
                  )
                })
              }



            </div>

          </motion.div>

        ) : null
      }

      {/* <div>
          <label htmlFor="my-modal-5" classNameName="modal-button cursor-pointer">
            <span
              classNameName="inline-block rounded-full bg-white shadow-lg p-2 mb-2 "
            
              onClick={() => openProjects("reactjs")}
            >
              <img
                src="https://source.unsplash.com/bY4GXQKfZrA/320x320"
                alt="User Avatar"
                className="inline-block w-20 h-20 rounded-full"
              />
            </span>

            <p className="text-gray-600 font-medium">ReactJs</p>
            </label>
          </div> */}


      {/* <input type="checkbox" id="my-modal-5" classNameName="modal-toggle" />
      <div classNameName="modal">
        <label
          for="my-modal-5"
          className="fixed z-90  btn btn-sm btn-circle right-5 top-5 "
        >
          ✕
        </label>
       
      </div> */}
    </div>
    //   ) : (

    //   )}
    // </div>
  );
};

export default Skills;
