import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import FileManagement from 'Home/computer-skills/FileManagement'
import UsingAtom from 'Home/computer-skills/UsingAtom'

export const routes = [
  {
    title: 'Computer Skills',
    type: 'toc',
    path: '/computer-skills',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='computer-skills' pageTitle='Computer Skills' match={match} />),
  },
  {
    title: 'File Management',
    type: 'page',
    path: '/computer-skills/file-management',
    component: withRouter(({ match }) => <FileManagement match={match} />),
  },
  {
    title: 'Using Atom',
    type: 'page',
    path: '/computer-skills/using-atom',
    component: withRouter(({ match }) => <UsingAtom match={match} />),
  },
]

export default routes
