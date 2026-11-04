import type { Page } from './portfolioContent';

export function applyMakerUpdate(sections:Record<string,Page>) {
  sections.Research.items=sections.Research.items.filter(item=>item.title!=='Space Debris and Their Impact');
  const sci=sections['Science Olympiad'];
  sci.items.splice(1,0,{title:'Storm the Castle',meta:'Counterweight launcher / State gold',text:['I built and tested a counterweight launcher, revising a single-pivot design into a linear mass-drop mechanism. Repeated launch tests connected the mechanism settings with the ball’s trajectory. The project earned state gold.'],image:'/media/extracted/storm-the-castle.jpg',caption:'Storm the Castle linear mass-drop launcher'});
  const projects=sections.Projects.items;
  projects.unshift({title:'Hyperion: 6-ft humanoid robot',meta:'55 joints / 33 actuated degrees of freedom',image:'/media/extracted/hyperion-assembly.jpg',caption:'Hyperion structure and assembly',text:[
    'I designed Hyperion in CAD and built it: a 6-ft, 3D-printed humanoid with 55 joints. It has 5 joints per leg, 4 per arm, 3 across the head, neck, and waist, and 17 per hand. Each hand is underactuated to 6 degrees of freedom, giving the robot 33 actuated degrees of freedom. The arm and leg joints reuse the 36:1 radial vector (RV) gearbox I proved on my 6-DOF test arm. I printed 20 of them and joined them with carbon-fiber plates.',
    'The upper body, including the head, arms, and tendon-driven hands, is powered and moving. The legs are fully built but not yet powered. I trained a walking policy in simulation, first with one robot and then with 100 in parallel.',
    'My next step is powering the legs with a custom four-channel motor controller using a DRV8701E gate driver and N-channel MOSFET H-bridges, then transferring the walking policy to the physical robot. The controller is designed but not yet built. Walking has only been demonstrated in simulation.'
  ]});
  const inmoov=projects.find(p=>p.title==='Full humanoid robot')!;
  inmoov.title='InMoov humanoid (2022–2025)';
  inmoov.meta='Open-source InMoov / Arms, fingers, head, and software';
  inmoov.text=[
    'Built on Gaël Langevin’s open-source InMoov design. Other students built the body and legs. I built the arms, fingers, and head, programmed the finger with Arduino, and wrote a voice chatbot using speech-to-text, GPT-3.5, and speech output, with the jaw synchronized through an Arduino. The hand and forearm servos proved too weak, so most of this robot does not move yet.',
    'I integrated OpenCV vision and facial recognition, explored kinematics-based movement and task scheduling, and revised the hardware and software through calibration and testing. My independent perception and control research was supported by mentorship from a Stanford PhD student.'
  ];
  const arm=projects.find(p=>p.title==='CF-3DP 6 DOF high-performance arm')!;
  arm.text=[
    'This six-degree-of-freedom arm develops the joint architecture and load-bearing structure beyond my first printed humanoid arm. Carbon-fiber plates and 3D-printed components bring material choice, gearbox packaging, and assembly access into the same CAD process.',
    'The completed arm has 885 mm of reach. Its 36:1 RV gearbox is 3D-printed and acts as the joint itself. I tuned it with an inverse-kinematics tool and a neural-network and PID controller. It now picks and places objects at tested positions within its reach. The same joint design is used in every arm and leg of Hyperion.'
  ];
  const green=projects.find(p=>p.title==='Greenpower USA electric car')!;
  green.text[0]='Built from the Greenpower kit. I led my team’s build, focusing on assembly, wiring, and testing, including rerouting brake-light wiring away from a high-wear area.';
}
