
<p align="center">
  <a href="https://arxiv.org/abs/2406.01029">
    <h1>CYCLO: Cyclic Graph Transformer Approach to Multi-Object Relationship Modeling in Aerial Videos (NeurIPS 2024)</h1>
  </a>
</p>

<!-- [Trong-Thuan Nguyen](https://scholar.google.com/citations?user=ty0Njf0AAAAJ&hl=vi&authuser=1), [Pha Nguyen](https://pha-nguyen.github.io/), [Xin Li](https://scholar.google.com/citations?user=gMBvzGoAAAAJ&hl=vi), [Jackson Cothren](https://scholar.google.com/citations?user=_WB9fo4AAAAJ&hl=vi&oi=ao), [Alper Yilmaz](https://scholar.google.com/citations?user=MeQC1XYAAAAJ&hl=vi&oi=ao), [Khoa Luu](https://scholar.google.com/citations?user=JPAl8-gAAAAJ) -->
<p align="center">
  <a href="https://scholar.google.com/citations?user=ty0Njf0AAAAJ&hl=vi&authuser=1/" target="_blank">Trong-Thuan Nguyen</a>, 
  <a href="https://pha-nguyen.github.io/" target="_blank">Pha Nguyen</a>, 
  <a href="https://scholar.google.com/citations?user=gMBvzGoAAAAJ&hl=vi" target="_blank">Xin Li</a>,<br>
  <a href="https://scholar.google.com/citations?user=_WB9fo4AAAAJ&hl=vi&oi=ao" target="_blank">Jackson Cothren</a>, 
  <a href="https://scholar.google.com/citations?user=MeQC1XYAAAAJ&hl=vi&oi=ao" target="_blank">Alper Yilmaz</a>, 
  <a href="https://scholar.google.com/citations?user=JPAl8-gAAAAJ" target="_blank">Khoa Luu</a>
</p>

Abstract
--------

Video scene graph generation (VidSGG) has emerged as a transformative approach to capturing and interpreting the intricate relationships among objects and their temporal dynamics in video sequences. In this paper, we introduce the new AeroEye dataset that focuses on multi-object relationship modeling in aerial videos. Our AeroEye dataset features various drone scenes and includes a visually comprehensive and precise collection of predicates that capture the intricate relationships and spatial arrangements among objects. To this end, we propose the novel Cyclic Graph Transformer (CYCLO) approach that allows the model to capture both direct and long-range temporal dependencies by continuously updating the history of interactions in a circular manner. The proposed approach also allows one to handle sequences with inherent cyclical patterns and process object relationships in the correct sequential order. Therefore, it can effectively capture periodic and overlapping relationships while minimizing information loss. The extensive experiments on the AeroEye dataset demonstrate the effectiveness of the proposed CYCLO model, demonstrating its potential to perform scene understanding on drone videos. Finally, the CYCLO method consistently achieves State-of-the-Art (SOTA) results on two in-the-wild scene graph generation benchmarks, i.e., PVSG and ASPIRe.

Introduction
------------

We introduce a new <i>AeroEye</i> dataset for VidSGG in <i>drone videos</i>, augmented with numerous predicates and diverse scenes to capture the complex relationships in aerial videos.

Examples of annotations found on the AeroEye dataset.



Annotations
-----------

v1.0:
-----
*   The <a href="https://drive.google.com/file/d/1933ZGScwyZbNaSb0yusX9klhmXHDk24p/view?usp=sharing" target="_blank">annotations</a> are available for download.
*   The <a href="https://drive.google.com/drive/folders/19cfOOiqd1zX1uDUym215k317_k4eWlxx?usp=sharing" target="_blank">10-fold cross-validation</a> splits are also provided.


Licensing:
----------

The videos on AeroEye are collected from <a href="https://mavrec.github.io/">MAVREC</a> and <a href="https://lcmou.github.io/ERA_Dataset/">ERA</a>, which are protected under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license.



This page was built using the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template).  
This website is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).