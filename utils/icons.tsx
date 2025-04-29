import { 
  FaCode, FaServer, FaDatabase, FaCogs, 
  FaNetworkWired, FaBook, FaLayerGroup, FaGlobe, FaAws
} from 'react-icons/fa';
import { 
  SiFlask, SiReact, SiMysql, SiPython, 
  SiGo, SiDocker, SiKubernetes, SiTerraform,
  SiJavascript, SiCss3, SiHtml5, SiPydantic
} from 'react-icons/si';
import { IconType } from 'react-icons';

export type IconName =
  | "Flask"
  | "React"
  | "MySQL"
  | "Python"
  | "Machine Learning"
  | "Networking"
  | "RFC"
  | "Caching"
  | "API"
  | "CSS"
  | "HTML"
  | "Go"
  | "Distributed Systems"
  | "Raft"
  | "Consensus"
  | "Server"
  | "AWS"
  | "AppSync"
  | "WebSocket"
  | "Middleware"
  | "Validation"
  | "Pydantic";

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
  AWS: FaAws,
  AppSync: FaNetworkWired,       // using a network wire icon for AppSync
  WebSocket: FaNetworkWired,     // can use same FaNetworkWired or custom later
  Middleware: FaCogs,            // Cogs for Middleware (Processing)
  Validation: FaBook,            // Book to represent Validation/Rules
  Pydantic: SiPydantic           // if you have SiPydantic available
};