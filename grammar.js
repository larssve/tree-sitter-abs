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
  name: 'abs',

  rules: {
			source_file: $ => repeat($._statement),

			_statement: $ => choice(
					$.expression_statement,
					//$._declaration_statement,
			),

			expression_statement: $ => seq(
					$._expression,
					';'
			),

			_expression: $ => choice (
					$._literal,
			),

			_literal: $ => choice(
					$.integer_literal,
					$.boolean_literal,
					$.null_literal,
			),

			integer_literal: _ => token(
					choice(
							'0',
							/[1-9][0-9]*/,
					)
			),

			boolean_literal: _ => choice('true', 'false'),

			null_literal: _ => "null",

			// 
			function_definition: $ => seq(
					"def",
					$.type,
					$.identifier,
					$.parameter_list,
					"=",
					$.pure_exp,
					";"
			),

			parameter_list: $ => seq(
					"(",
					$.type,
					$.identifier,
					")"
			),

			type: $ => choice(
					"Bool",
					"Int",
					"String",
					"Unit"
			),

			pure_exp: $ => choice(
					$.int_literal,
					"null"
			),

			//int_literal: $ => ///^[0]$|^[1-9][0-9]*$/, // lookarounds are problematic
			int_literal: $ => /0|[1-9][0-9]*/,

			identifier: $ => /[a-z]([A-Za-z0-9_]*)/ 
  }
});
