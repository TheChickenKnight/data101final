import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {Bar()}
      <strong>Title Place holder</strong>
    </div>
  );
}

function Bar() {
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Personal">
          <MenuItem>About Me</MenuItem>
          <MenuItem>Resume</MenuItem>
        </SubMenu>
        <SubMenu label="Projects">
          <MenuItem component={<Link href="/data101"/>}>Data 101</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
