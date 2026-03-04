#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Applied Mathematics
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz, pgfplots, tikz-3dplot}
\usetikzlibrary{positioning,matrix,arrows.meta}
\usetikzlibrary{shapes,decorations,shadows,fadings,patterns}
\usetikzlibrary{decorations.markings}
\pgfplotsset{compat=1.18}

END_LATEX_IMAGE_PREAMBLE
}
