# Jest and mute

Debugging an issue with (jest)[https://github.com/facebook/jest] and (mute)[https://github.com/shannonmoeller/mute].

If you run suite1 specifically, it will mute the console logs. If you run all tests, it will not. The jest option `--silent` will work, but mutes _all_ output, even if it's output you would want to see.

## Install

```
yarn install
```

## Test

```
yarn test
```

Run a specific suite:

```
npx jest test/suite1.spec.js
```

[screenshot of tests showing difference in output][screenshot.png]

## Environment

| | Version |
|-|---------|
| Node | `9.5.0` |
| Yarn | `1.5.1` |
| Jest | `22.4.2` |
| Mute | `2.0.6` |
