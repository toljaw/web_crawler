// import { test, expect } from "@jest/globals";
// import {normalizeURL} from "./crawl.js";
//
// test('normalizeURL() returns "https://blog.boot.dev/path/" as "blog.boot.dev/path"', () => {
//    expect(normalizeURL("https://blog.boot.dev/path/")).toBe("blog.boot.dev/path");
// });
//
// test('normalizeURL() returns "https://blog.boot.dev/path" as "blog.boot.dev/path"', () => {
//     expect(normalizeURL("https://blog.boot.dev/path")).toBe("blog.boot.dev/path");
// });
//
// test('normalizeURL() returns "http://blog.boot.dev/path/" as "blog.boot.dev/path"', () => {
//     expect(normalizeURL("http://blog.boot.dev/path/")).toBe("blog.boot.dev/path");
// });
//
// test('normalizeURL() returns "http://blog.boot.dev/path" as "blog.boot.dev/path"', () => {
//     expect(normalizeURL("http://blog.boot.dev/path")).toBe("blog.boot.dev/path");
// });

import { normalizeURL } from './crawl.js'
import { test, expect } from '@jest/globals'

test('normalizeURL protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL http', () => {
    const input = 'http://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

