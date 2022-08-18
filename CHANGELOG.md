## [2.0.1](https://github.com/prantlf/fast-plural-rules/compare/v2.0.0...v2.0.1) (2022-08-18)

### Bug Fixes

* Automate changelog management ([8202ecc](https://github.com/prantlf/fast-plural-rules/commit/8202eccead2ea54cc04ef1c48b85fef6936d9cb0))

# [2.0.0](https://github.com/prantlf/fast-plural-rules/compare/v1.0.2...v2.0.0) (2022-08-18)

### Features

* API for checking supported locales and plural forms ([fc92897](https://github.com/prantlf/fast-plural-rules/commit/fc92897376855057a680b90fe363b843fe54d065))
* Declare CJS, UMD and ES exports in package.json ([5ab230a](https://github.com/prantlf/fast-plural-rules/commit/5ab230aaa0bbc87d2b5e287f4f9557a94e3e151b))

### BREAKING CHANGES

* Node.js 14.8 or newer recommended. Supports `type`, `module`, `types` and `exports`. The sources didn't change, which means that the exported modules will still work in Node.js 6 and newer, but the're no tests proving that.

## [1.0.2](https://github.com/prantlf/fast-plural-rules/compare/v1.0.1...v1.0.2) (2022-01-28)

### Bug Fixes

* Adapt sources after upgrading the build environment ([d185af3](https://github.com/prantlf/fast-plural-rules/commit/d185af3c34f832c69ac7bcb81d88a9eb172b085d))

## [1.0.1](https://github.com/prantlf/fast-plural-rules/compare/v1.0.0...v1.0.1) (2019-09-24)

### Bug Fixes

* Upgrade package dependencies ([9ec2ca4](https://github.com/prantlf/fast-plural-rules/commit/9ec2ca4))

# [1.0.0](https://github.com/prantlf/fast-plural-rules/compare/v0.0.3...v1.0.0) (2019-07-31)

### Bug Fixes

* Correct the Baltic plural rules 1 and 2 ([ebe746d](https://github.com/prantlf/fast-plural-rules/commit/ebe746d))
* Correct the Celtic plural rules 1, 2 and 3 ([df6a2c0](https://github.com/prantlf/fast-plural-rules/commit/df6a2c0))
* Correct the Semitic plural rule 1 ([6fbd979](https://github.com/prantlf/fast-plural-rules/commit/6fbd979))
* Fix the Celtic plural rule 4 computation for the cardinal 0 ([a24dc1a](https://github.com/prantlf/fast-plural-rules/commit/a24dc1a))
* Keep Mozilla's plural rule number for zero in Baltic, Shuar and Welsh ([a008166](https://github.com/prantlf/fast-plural-rules/commit/a008166))
* Transpile the CJS module output for Node.js 6 or newer ([c408cf0](https://github.com/prantlf/fast-plural-rules/commit/c408cf0))
* Upgrade npm module dependencies ([90e9fb8](https://github.com/prantlf/fast-plural-rules/commit/90e9fb8))


### Features

* Introduce support for plural rule names according to CLDR ([9b21be2](https://github.com/prantlf/fast-plural-rules/commit/9b21be2))
* Provide both minificated and only cleaned-up UMD scripts for the browser ([637714c](https://github.com/prantlf/fast-plural-rules/commit/637714c))


### BREAKING CHANGES

* These three language families used their last rule for the cardinal zero. It was not consistent with the result of the original Mozilla's rule evaluation. I moved the zero rule to the beginning for these three families to avoid mistakes from this only difference.

If you write language packs for these language groups:

* Baltic (Latvian, Latgalian)
* Ecuador indigenous languages (Shuar)
* Welsh

Move the string for the plural form for zero to the beginning of the string array.

The Semitic (Arabic) plural rules still put the zero plural form as the last one as the Mozilla's original does.

## [0.0.3](https://github.com/prantlf/fast-plural-rules/compare/v0.0.2...v0.0.3) (2019-06-07)

### Bug Fixes

* Upgrade module dependencies ([29c0c76](https://github.com/prantlf/fast-plural-rules/commit/29c0c76))

## [0.0.2](https://github.com/prantlf/fast-plural-rules/compare/v0.0.1...v0.0.2) (2019-03-10)

### Bug Fixes

* Upgrade module dependencies ([dc9009e](https://github.com/prantlf/fast-plural-rules/commit/dc9009e))

## 2018-10-28   v0.0.1

Initial release
