import VideoFigure from './components/VideoFigure';
import manifest from './mediaManifest.json';

export const clipGroups:Record<string,(string|string[])[]>={
  'Hyperion: 6-ft humanoid robot':['hyperion-wave-v2',['hyperion_head_finger_test','hyperion_tendons'],'hyperion_sim_and_robot','hyperion_walking_sim'],
  'CF-3DP 6 DOF high-performance arm':[['rv_gearbox','test_arm'],'joint_tuning_dashboard'],
  'InMoov humanoid (2022–2025)':['inmoov_head_robot_dog'],
  'Rocketry and thrust-vector control':['rocket_launches'],
  'Lawn mower with SLAM':['lawn_mower'],
  'Mapping unmanned aerial vehicle and RC aircraft':[['mapping_drone','rc_aircraft_v1']],
  'Greenpower USA electric car':['greenpower_car_wiring'],
  'Combat robotics':['combat_robot'],
  'Championships and team operations':['mapping_drone'],
  'Centerstage':['ftc_centerstage_intake_transfer'],
  'Into the Deep':['ftc_itd_transfer_v1_v2','ftc_itd_auto_competition'],
  'DECODE':['ftc_decode_transfer_v1_v2','ftc_decode_transfer_speed','ftc_decode_auto'],
  'Storm the Castle':['scioly_storm_the_castle'],
  'Air Trajectory':['scioly_air_trajectory'],
  'Electric Vehicle':['scioly_electric_vehicle'],
};
function Clip({name}:{name:string}) {
  const clip=manifest.find(c=>c.file===`videos/${name}.mp4`)!;
  return <VideoFigure src={'/media/'+clip.file} poster={'/media/'+clip.poster} alt={clip.alt} caption={clip.caption} orientation={clip.orientation as 'landscape'|'portrait'}/>;
}
export function hasClips(title:string) {return Boolean(clipGroups[title]);}
export default function ProjectClips({title}:{title:string}) {
  const groups=clipGroups[title];
  if(!groups)return null;
  return <>{groups.flat().map(name=><Clip key={name} name={name}/>)}</>;
}
