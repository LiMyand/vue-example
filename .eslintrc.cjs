module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 指定如何解析语法
  parser: 'vue-eslint-parser',
  // 优先级低于 parse 的语法解析配置
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  // 继承某些已有的规则
  extends: [
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
    'airbnb-base',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  /**
   * "off" 或 0  ==>  关闭规则
   * "warn" 或 1 ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2 ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    'prettier/prettier': 'error',
    'import/extensions': 0,
    'prefer-template': 0,
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'prefer-const': 'off', // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
    'no-irregular-whitespace': 'off', // 禁止不规则的空白\
    'import/no-cycle': 0,
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'prefer-destructuring': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-case-declarations': 0,
    'prefer-promise-reject-errors': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    camelcase: 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-debugger': 0,
    'no-promise-executor-return': 0,
    // vue (https://eslint.vuejs.org/rules)
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效。
    'vue/v-slot-style': 'error', // 强制执行 v-slot 指令样式
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/no-v-html': 'off', // 禁止使用 v-html
    'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
    'vue/attributes-order': 'off', // vue api使用顺序，强制执行属性顺序
    'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
    'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
    'vue/max-attributes-per-line': 'off', // 强制每行的最大属性数
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    'vue/require-default-prop': 'off', // 此规则要求为每个 prop 为必填时，必须提供默认值
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue.prefer-template': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
  },
};
