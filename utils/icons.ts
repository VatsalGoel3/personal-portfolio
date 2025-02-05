import { 
  SiFlask, SiReact, SiMysql, SiPython, 
  SiGo, SiDocker, SiKubernetes, SiTerraform,
  SiJavascript, SiCss3, SiHtml5
} from 'react-icons/si';
import { 
  FaCode, FaServer, FaDatabase, FaCogs, 
  FaNetworkWired, FaBook, FaLayerGroup, FaGlobe
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export type IconName = "Flask" | "React" | "MySQL" | "Python" | "Machine Learning" | "Networking" | "RFC" | "Caching" | "API" | "CSS" | "HTML" | "Go" | "Distributed Systems" | "Raft" | "Consensus" | "Server";

export const IconMap: Record<IconName, IconType> = {
  Flask: SiFlask,
  React: SiReact,
  MySQL: SiMysql,
  Python: SiPython,
  "Machine Learning": FaDatabase,
  Networking: FaServer,
  RFC: FaCode,
  Caching: FaLayerGroup,
  API: FaGlobe,
  CSS: SiCss3,
  HTML: SiHtml5,
  Go: SiGo,
  "Distributed Systems": FaServer,
  Raft: FaCogs,
  Consensus: FaCode,
  Server: FaServer,
}; 