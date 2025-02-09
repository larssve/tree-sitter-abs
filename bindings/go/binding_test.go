package tree_sitter_abs_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_abs "github.com/abstools/abstools/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_abs.Language())
	if language == nil {
		t.Errorf("Error loading Abstract Behavioural Specification language grammar")
	}
}
