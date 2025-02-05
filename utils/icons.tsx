import { 
  FaGithub, FaLinkedin, FaCode, FaServer, FaTools,
  FaPython, FaJava, FaJs, FaReact, FaAws, FaDocker 
} from "react-icons/fa";
import { 
  SiCplusplus, SiGo, SiTensorflow, SiKubernetes, 
  SiTerraform, SiFlask, SiExpress, SiMysql, SiRedis
} from "react-icons/si";

export const IconMap = {
  Flask: SiFlask,
  React: FaReact,
  MySQL: SiMysql,
  Python: FaPython,
  ML: SiTensorflow,
  Networking: FaServer,
  RFC: FaCode,
  Caching: SiRedis,
  Go: SiGo,
  "Distributed Systems": FaServer,
  Raft: FaCode,
  Consensus: FaCode,
  "Machine Learning": SiTensorflow
};

export type IconName = keyof typeof IconMap; 