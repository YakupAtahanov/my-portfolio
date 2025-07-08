import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const links = [
  {
    icon: <FaGithub />,
    title: 'GitHub',
    subtitle: 'View my code projects',
    url: 'https://github.com/YakupAtahanov',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    subtitle: 'Connect with me professionally',
    url: 'https://www.linkedin.com/in/yakup-atahanov/',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Me',
    subtitle: 'yakup.atahanow.b@gmail.com',
    url: 'mailto:yakup.atahanow.b@gmail.com',
  },
  {
    icon: <FaFileAlt />,
    title: 'Resume',
    subtitle: 'Download my resume (PDF)',
    url: '/Yakup-Resume.pdf',
  },
];

export default links;
