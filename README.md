# Multi-Head Recurrent Memory Agents

Static academic project website for Jiatong Li, Samuel Yeh, and Sharon Li (University of Wisconsin–Madison). Open `index.html` or serve the directory with `python -m http.server 8000`. No build step, CDN, or JavaScript dependency is needed. The site can be served directly by GitHub Pages from the repository root.

## Content provenance

Authorship, abstract, code URL, measurements, and figures come from the supplied manuscript. Main accuracy tables preserve every reported mean and standard deviation. Figures are web-resolution renders of the manuscript's original vector figures. Retention and final-answer accuracy are explicitly distinguished. The head-count ablation's increasing capacity and the longest-context runtime overhead are disclosed.

The source folder `Recurrent_Memory__Preprint_` is excluded in `.gitignore`, along with local template and validation tools. Only selected rendered figures are website assets; the manuscript source is not required to serve the site. No compiled paper PDF or verified publication URL was provided, so the site has no placeholder paper-download link. Add a paper link and update citation metadata when those are available. No acceptance venue or publication year is inferred from the manuscript's LaTeX style filename.

## Template and attribution

Adapted from https://github.com/CSLiJT/nerfies.github.io at commit `657409a62d59a93163872c0e4921cf651b987810`. Retains the Nerfies hero, author and publication-link structure, Bulma layout framework, figure sections, abstract, citation, and attribution. Custom responsive styling and dependency-free interactions replace the template's unrelated media, analytics, and scripts.

The original template is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); this website template adaptation is distributed under the same license. Paper text and figures remain attributable to the paper authors. The vendored Bulma CSS is copyright Jeremy Thomas and licensed under MIT; see `static/css/BULMA-LICENSE.txt`.
