/**
 * @file ABS is a language for Abstract Behavioral Specification,
 * which combines implementation-level specifications with
 * verifiability, high-level design with executablity, and formal
 * semantics with practical usability. ABS is a concurrent,
 * object-oriented, modeling language that features functional
 * data-types.
 * @author 
 * @license unlicensed
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "abs",

  rules: {
			source_file: $ => repeat($._definition),

			_definition: $ => seq(
					"def",
					$._type,
					$.identifier,
					$.parameter_list,
					"=",
					$.pure_exp,
					";"
			),

			parameter_list: $ => seq(
					"(",
					$._type,
					$.identifier,
					")"
			),

			_type: $ => choice(
					"Bool",
					"Int",
					"String",
					"Unit"
			),

			pure_exp: $ => choice(
					$._int_literal,
					"null"
			),

			//_int_literal: $ => ///^[0]$|^[1-9][0-9]*$/, // lookarounds are problematic
			_int_literal: $ => /0|[1-9][0-9]*/,

			identifier: $ => /[a-z]([A-Za-z0-9_]*)/ 
  }
});
