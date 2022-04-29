import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="blogs my-5">
            <div className='container'>
                <Card.Title>1) Difference between javascript and nodejs?</Card.Title>
                <div>
                    <strong>Ans:</strong><p> JavaScript একটি স্ক্রিপ্টিং ভাষা। JavaScript হল ECMA স্ক্রিপ্টের একটি আপডেট করা সংস্করণ। জাভাস্ক্রিপ্ট একটি উচ্চ-স্তরের প্রোগ্রামিং ভাষা যা OPS ধারণা ব্যবহার করে।</p>
                    <p>নোডজেএস একটি ক্রস-প্ল্যাটফর্ম এবং ওপেন সোর্স জাভাস্ক্রিপ্ট রানটাইম পরিবেশ যা জাভাস্ক্রিপ্টকে সার্ভার-সাইডে চালানোর অনুমতি দেয়। Nodejs জাভাস্ক্রিপ্ট কোড ব্রাউজারের বাইরে চালানোর অনুমতি দেয়।</p>
                    <strong>Difference between JavaScript and Nodejs: </strong>
                </div>
                <div className='mb-4'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Javascript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Javascript একটি প্রোগ্রামিং ভাষা যা একটি ওয়েবসাইটে স্ক্রিপ্ট লিখতে ব্যবহৃত হয়।</td>
                                <td>Node JS একটি জাভাস্ক্রিপ্ট রানটাইম অবস্থা।</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JavaScript শুধুমাত্র ব্রাউজারে চালানো যায়।</td>
                                <td> Node JS এর সাহায্যে  ব্রাউজারের বাইরে JavaScript চালানো যায় ।</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>JavaScript মূলত ক্লায়েন্ট-সাইডে ব্যবহৃত হয়।</td>
                                <td>Node JS সার্ভার-সাইডে ব্যবহৃত হয়।</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>JavaScript এইচটিএমএল যোগ করতে এবং DOM এর সাথে কাজ করতে সক্ষম।</td>
                                <td>Nodejs HTML ট্যাগ যোগ করতে পারে না।</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>JavaScript যেকোনো ব্রাউজার ইঞ্জিনে চলতে পারে, যেমন সাফারিতে জেএস কোর এবং ফায়ারফক্সে স্পাইডারমঙ্কি।</td>
                                <td>V8 হল node.js এর ভিতরে জাভাস্ক্রিপ্ট ইঞ্জিন যা জাভাস্ক্রিপ্ট parse করে এবং চালায়।</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>JavaScript ফ্রন্ট এন্ড ডেভেলপমেন্ট এ ব্যবহার করা হয়।</td>
                                <td>Nodes সার্ভার-সাইড ডেভেলপমেন্ট এ ব্যবহার করা হয়।</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>



                <Card.Title>2) Differences between sql and nosql databases?</Card.Title>
                <div>
                    <strong>Ans:</strong>  একটি ডাটাবেস বেছে নেওয়ার ক্ষেত্রে সবচেয়ে বড় সিদ্ধান্ত হল একটি রিলেশনাল (SQL) বা নন-রিলেশনাল (NoSQL) ডেটা স্ট্রাকচার বেছে নেওয়া। যদিও উভয় ডাটাবেস দিয়ে একই কাজ করা যায় ,তবুও উভয়ের মধ্যে কিছু মূল পার্থক্য রয়েছে যা ব্যবহারকারীদের অবশ্যই সিদ্ধান্ত নেওয়ার সময় মনে রাখতে হয়।
                </div>
                <div className='mb-4'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>SQL হচ্ছে রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS)</td>
                                <td>NoSQL হচ্ছে নন-রিলেশনাল বা ডিস্ট্রিবিউটেড ডাটাবেস সিস্টেম।</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>SQL ডাটাবেস এ স্থির বা পূর্বনির্ধারিত schema আছে।</td>
                                <td>NoSQL ডাটাবেস এ dynamic schema আছে।</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>SQL ডাটাবেস শ্রেণীবদ্ধ ডেটা সঞ্চয়ের জন্য উপযুক্ত নয়।</td>
                                <td>NoSQL ডাটাবেসগুলি শ্রেণীবদ্ধ ডেটা সঞ্চয়ের জন্য সবচেয়ে উপযুক্ত।</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>SQL ডাটাবেস গুলি complex queries এর  জন্য সবচেয়ে উপযুক্ত।</td>
                                <td>NoSQL ডাটাবেস গুলি complex queries এর  জন্য এতটা ভালো নয়।</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>SQL is vertically scalable.</td>
                                <td>NoSQL is horizontally scalable.</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>SQL (ACID) এর  বৈশিষ্ট্য অনুসরণ করে।</td>
                                <td>NoSQL CAP(consistency, availability, partition tolerance) অনুসরণ করে। </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <Card.Title>3) What is the purpose of jwt and how does it work?</Card.Title>
                <div>
                    <strong>Ans:</strong><p>JSON ওয়েব টোকেন হল একটি আদর্শ মাধ্যম, যা একটি অ্যাপ্লিকেশনের জন্য অ্যাক্সেস টোকেন তৈরি করতে ব্যবহৃত হয়।এটি  সার্ভারে একটি টোকেন তৈরি করে যা ব্যবহারকারীর পরিচয় verifiy করে এবং ক্লায়েন্টকে পাঠায়।ক্লায়েন্ট পরবর্তী কাজের জন্য সার্ভারে টোকেন ফেরত পাঠালে ,সার্ভার বোঝতে পারে যে অনুরোধটি একটি নির্দিষ্ট user থেকে এসেছে।এই আর্কিটেকচারটি আধুনিক ওয়েব অ্যাপ্লিকেশনগুলিতে অত্যন্ত কার্যকর, যেখানে আমরা ব্যবহারকারীর প্রমাণীকরণের পরে একটি REST বা GraphQL API-এ API অনুরোধগুলি সম্পাদন করা যায় ।</p>
                    <p>একটি JWT হল একটি Base64URL এনকোড করা স্ট্রিং, তিনটি বিভাগে বিভক্ত, এবং সময় দ্বারা সীমাবদ্ধ।</p>
                    <p>REST API এন্ডপয়েন্টে authentication জন্য টোকেন-ভিত্তিক প্রমাণীকরণ সম্ভবত সবচেয়ে সাধারণ পদ্ধতি।টোকেন-ভিত্তিক প্রমাণীকরণের একটি গুরুত্বপূর্ণ অংশ হল JWT-এর মেয়াদ শেষ হওয়া। </p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;