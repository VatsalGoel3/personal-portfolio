import { 
  SiFlask, SiReact, SiMysql, SiPython, 
  SiGo, SiDocker, SiKubernetes, SiTerraform,
  SiJavascript, SiCss3, SiHtml5
} from 'react-icons/si';
import { 
  FaCode, FaServer, FaDatabase, FaCogs, 
  FaNetworkWired, FaBook, FaLayerGroup, FaGlobe
} from 'react-icons/fa';

export type IconName = 
  | "Flask" | "React" | "MySQL" | "Python"
  | "Go" | "Docker" | "Kubernetes" | "Terraform"
  | "Machine Learning" | "Networking" | "RFC"
  | "Caching" | "Distributed Systems" | "Raft"
  | "Consensus" | "JavaScript" | "CSS" | "API"
  | "HTML";

export const IconMap: Record<IconName, React.ComponentType> = {
  "Flask": SiFlask,
  "React": SiReact,
  "MySQL": SiMysql,
  "Python": SiPython,
  "Go": SiGo,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Terraform": SiTerraform,
  "Machine Learning": FaDatabase,
  "Networking": FaNetworkWired,
  "RFC": FaBook,
  "Caching": FaLayerGroup,
  "Distributed Systems": FaServer,
  "Raft": FaCogs,
  "Consensus": FaCode,
  "JavaScript": SiJavascript,
  "CSS": SiCss3,
  "API": FaGlobe,
  "HTML": SiHtml5,
}; 