// sidebarLinks.js
import AccountsIcon from "@mui/icons-material/ManageAccounts";
import ApplicantsIcon from "@mui/icons-material/Groups";
import ClientsIcon from "@mui/icons-material/AssignmentInd";
import JobsIcon from "@mui/icons-material/Work";
import PostsIcon from "@mui/icons-material/PostAdd";
const links = [
  {
    sidebarLinks: [
      {
        label: "Accounts",
        url: "/accounts",
        icon: <AccountsIcon style={{ height: "1.3rem" }} />,
      },
      {
        label: "Applicants",
        url: "/applicants",
        icon: <ApplicantsIcon />,
      },
      {
        label: "Clients",
        url: "/clients",
        icon: <ClientsIcon style={{ height: "1.2rem" }} />,
      },
      {
        label: "Jobs",
        url: "/jobs",
        icon: <JobsIcon style={{ height: "1.2rem" }} />,
      },
      {
        label: "Posts",
        url: "/posts",
        icon: <PostsIcon style={{ height: "1.4rem" }} />,
      },
    ],
  },
  {
    sidebarLinks: [
      {
        label: "Profile",
        url: "/profile",
        icon: <i class="bi bi-file-earmark-person"></i>,
      },
      {
        label: "Orders",
        url: "/orders",
        icon: <i class="bi bi-people-fill"></i>,
      },
      {
        label: "Media Files",
        url: "/media-files",
        icon: <i class="bi bi-person-badge"></i>,
      },
    ],
  },
];

export default links;
