module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        quotes: ['error', 'single'],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                'assertionStyle': 'as',
                'objectLiteralTypeAssertions': 'allow-as-parameter'
            }
        ]
    }
};
