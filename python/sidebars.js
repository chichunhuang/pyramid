/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  totem_sidebar: [
    
    //autogenerated from dir hierarchy
    {type: 'autogenerated', dirName: '.'},
    
//   // External link
//   { 
//     type: 'link',
//     label: 'Facebook', // The link label
//     href: 'https://facebook.com', // The external URL
//   },
//   
//   // Internal link
//   {
//     type: 'link',
//     label: 'Home', // The link label
//     href: '/', // The internal path
//   },
//   
//   
//   // 自定義細節
//   {
//     type: 'category',
//     label: 'PythonFolder',
//     items: [
//       {
//         type: 'doc',
//         id: 'DevTech/Python_Basic',
//       },
//       {
//         type: 'doc',
//         id: 'another_path_to_md_file',
//       },
//     ],
//   },
  
  
  
  
  ],


   //should be mapped to docusaurus.config.js -> themeConfig -> sidebarId
   // tutorialSidebar: [
   //
   //  {
   //   type: 'category',
   //   label: 'XYZ', // Label of Menu Root 
   //   items: ['DevTech/Python/Python_Basic_Print', 'DevTech/Python/Python_File'], // 有序 list
   //   
   // },
   // ],
  
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
