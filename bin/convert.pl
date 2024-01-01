#!/usr/bin/env perl

use strict;
use warnings;
use experimental 'signatures';

use Mojo::File qw(curfile);
use Data::Dumper;

convertFile($_) for @ARGV;

sub convertFile($filepath) {
  my $path = Mojo::File->new($filepath);
  my $source        = $path->slurp;




  my @new_rows;
  my @rows = split(/\n/, $source);


  while (@rows) {
		my $row = shift @rows;
    # print Dumper $row;
    if ($row =~ /\\ref\{(.*?)\}/){
      my $ref = join('-',split(/:/,$1));
      $row =~ s/(\\ref\{(.*?)\})/<xref ref="$ref" \/>/;
    }

    my $convert_bmatrix = 0;
    $convert_bmatrix = 1 if ($row =~ /\\begin\{bmatrix\}\[(.*?)\]/);

    $row =~ s/\\begin\{bmatrix\}\[(.*?)\]/\\left[\\begin{array}{$1}/;
    if ($convert_bmatrix && $row =~ /\\end\{bmatrix\}/) {
      $row =~ s/\\end\{bmatrix\}/\\end{array}/;
      $convert_bmatrix = 0;
    }

    $row =~ s/\\begin\{(definition|theorem|example|lemma|proof)\}/<$1>/;
    $row =~ s/\\end\{(definition|theorem|example|lemma|proof)\}/<\/$1>/;
    $row =~ s/&/\\amp/g;

    $row =~ s/\\begin\{align\*?\}/<md>/;
    $row =~ s/\\end\{align\*?\}/<\/md>/;

    $row =~ s/\$(.*?)\$/<m>$1<\/m>/g;
    $row =~ s/\\textbf\{(.*?)\}/<term>$1<\/term>/g;

    if ($row =~ /\\begin\{(itemize|enumerate)\}/) {
      $row =~ s/\\begin\{itemize\}/\<ul\>/;
      $row =~ s/\\begin\{enumerate\}/\<ol\>/;
      do {
        $row =~ s/\\item/\<li\>\<p\>/;
        push(@new_rows, $row);
        $row = shift @rows;
      } until ($row =~ /\\end\{(itemize|enumerate)\}/);
      $row =~ s/\\end\{itemize\}/\<\/ul\>/;
      $row =~ s/\\end\{enumerate\}/\<\/ol\>/;
    }
    push(@new_rows, $row);
  }


  $path->copy_to($filepath =~ s/\.ptx$/.ptx.bak/r);
  # Mojo::File->new("test.ptx")->spurt(join("\n", @rows));
  $path->spurt(join("\n", @new_rows));
}

sub convertRow($row) {


  return $row;
}

1;