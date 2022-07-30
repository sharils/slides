# LEARN RUST VERBS

![https://sharils.github.io/slides/20220731-learn-rust-verbs](./qa.png "Learn Rust Verbs")

[sharils.github.io/slides/20220731-learn-rust-verbs](https://sharils.github.io/slides/20220731-learn-rust-verbs "https://sharils.github.io/slides/20220731-learn-rust-verbs")

---

# Q&A

![Join Slido: Enter #code to vote and ask questions](./qa.png "Join Slido: Enter #code to vote and ask questions")

[app.sli.do/event/pdmHAZWcGDERsxZzcx6i7g](https://app.sli.do/event/pdmHAZWcGDERsxZzcx6i7g "Learn Rust Verbs")

---

# THE PROBLEM

```rust
fn main() {
    let bad_beef = 0xBadBeef;
    println!("No {:#x}", bad_beef);
}
```

Easy. [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=a5786f23348afad9f9cd1913c6822315 "Rust Playground")

----

# THE PROBLEM

```rust
fn inspect(bad_beef: i32) -> i32 {
    dbg!(bad_beef);
    return bad_beef;
}

fn main() {
    let bad_beef = 0xBadBeef;
    println!("No {:#x}", inspect(bad_beef));
}
```

Let's inspect. [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=68ffaac1cda7bbdd3ddd7e219a493eb2 "Rust Playground")

----

# THE PROBLEM

```rust
fn inspect(bad_beef: String) -> String {
    dbg!(bad_beef);
    return bad_beef;
}

fn main() {
    let bad_beef = String::from("Bad Beef!");
    println!("No {}", inspect(bad_beef));
}
```

Now a String. [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=909d996cda70549f965c9fa8fe64b55f "Rust Playground")

----

# THE PROBLEM

```
   Compiling playground v0.0.1 (/playground)
error[E0382]: use of moved value: `bad_beef`
 --> src/main.rs:3:12
  |
1 | fn inspect(bad_beef: String) -> String {
  |            -------- move occurs because `bad_beef` has
                        type `String`, which does not
                        implement the `Copy` trait
2 |     dbg!(bad_beef);
  |     -------------- value moved here
3 |     return bad_beef;
  |            ^^^^^^^^ value used here after move

For more information about this error, try `rustc --explain E0382`.
error: could not compile `playground` due to previous error
```

Oops!

---

# COPY

```rust
// 3. Copy i32 to bad_beef
fn inspect(bad_beef: i32) -> i32 {
    dbg!(bad_beef); // 4. Copy bad_beef to dbg ✅
    return bad_beef; // 5. Copy bad_beef to main
}

fn main() {
    // 1. Copy i32 to bad_beef
    let bad_beef = 0xBadBeef;

    // 2. Copy bad_beef to inspect
    // 6. Copy bad_beef to println
    println!("No {:#x}", inspect(bad_beef));
}
```

[▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=14e3cdb20144ab62eb6c015a46cfeb36 "Rust Playground")

----

# COPY

|            | Stack       | Heap            |
|------------|-------------|-----------------|
| Access     | Faster      | Slower          |
| Allocation | Faster      | Slower          |
| Drop       | Faster      | Slower          |
| Jump       | Less        | More            |
| Size       | Known&Fixed | Unknown∥Dynamic |

[The Stack and the Heap][7]

[7]: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap

----

# COPY

copy

→ impl Copy

→ Stack-Only Data

→ Known&Fixed Size At Compile Time

---

# MOVE

```rust
fn inspect(bad_beef: String) -> String {
    dbg!(bad_beef);
    return bad_beef;
}

fn main() {
    let bad_beef = String::from("Bad Beef!");
    println!("No {}", inspect(bad_beef));
}
```

Not [too early][1], not [too late][2], not [too many][3], not [too few][2] and
no GC, i.e.

***at the right time, for the right times.***

[1]: https://owasp.org/www-community/vulnerabilities/Using_freed_memory "Using freed memory | OWASP Foundation"
[2]: https://owasp.org/www-community/vulnerabilities/Memory_leak "Memory leak | OWASP Foundation"
[3]: https://owasp.org/www-community/vulnerabilities/Doubly_freeing_memory "Doubly freeing memory | OWASP Foundation"

----

# MOVE

```rust
// 4. Move String into bad_beef
fn inspect(bad_beef: String) -> String {
    dbg!(bad_beef); // 5. Move String into dbg
                    // 6. Invalidate bad_beef in inspect
    return bad_beef; // 7. Move bad_beef into main 💥
}
fn main() {
    // 1. Move String into bad_beef
    let bad_beef = String::from("Bad Beef!");

    // 2. Move bad_beef into inspect
    // 3. Invalidate bad_beef in main
    // 8. Move String into println
    println!("No {}", inspect(bad_beef));
}
```

Move: [change of ownership][4] i.e. right to drop. [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=64281b1e12575795c9200cc3f7e21885 "Rust Playground")

[4]: https://github.com/rust-lang/book/blob/main/src/img/trpl04-04.svg "book/trpl04-04.svg at main · rust-lang/book · GitHub"

----

# MOVE

```
           ─┬─ stack ─┬─ Copy ─── copy ─── Duration
            │         │
            │         ├─ Drop ─── move ─── ?
            │         │
            │         └─ None ─── move ─── ?
            │
            └─ heap ──┬─ Drop ─── move ─── Vec
                      │
                      └─ None ─── move ─── String
```

---

# CLONE

```
   Compiling playground v0.0.1 (/playground)
error[E0382]: use of moved value: `bad_beef`
 --> src/main.rs:3:12
  |
1 | fn inspect(bad_beef: String) -> String {
  |            -------- move occurs because `bad_beef` has
                        type `String`, which does not
                        implement the `Copy` trait
2 |     dbg!(bad_beef);
  |     -------------- value moved here
3 |     return bad_beef;
  |            ^^^^^^^^ value used here after move

For more information about this error, try `rustc --explain E0382`.
error: could not compile `playground` due to previous error
```

How about deep copy?

----

# CLONE

```rust
fn inspect(bad_beef: String) -> String {
    // 1. Clone bad_beef
    // 2. Move clone of bad_beef into dbg ✅
    dbg!(bad_beef.clone());

    return bad_beef;
}

fn main() {
    let bad_beef = String::from("Bad Beef!");

    println!("No {}", inspect(bad_beef));
}
```

[No free lunch][6] [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=29640f566b35ee5e75068a174f23fa24 "Rust Playground")

[6]: https://github.com/rust-lang/book/blob/main/src/img/trpl04-03.svg "book/trpl04-03.svg at main · rust-lang/book · GitHub"

---

# BORROW

```rust
// 3. Move String into bad_beef
fn inspect(bad_beef: String) -> String {
    dbg!(&bad_beef); // 4. Borrow String
                     // 5. Copy borrow of String to dbg ✅
    return bad_beef; // 6. Move String into main
}
fn main() {
    // 1. Move String into bad_beef
    let bad_beef = String::from("Bad Beef!");

    // 2. Move String into inspect
    // 7. Move String into println
    println!("No {}", inspect(bad_beef));
}
```

Borrow: [no change of ownership][5] → no right to drop. [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=49f3082c30deb525f05aef9bb014cb59 "Rust Playground")

[5]: https://github.com/rust-lang/book/blob/main/src/img/trpl04-05.svg "book/trpl04-05.svg at main · rust-lang/book · GitHub"

----

# BORROW

```rust
// 4. Copy borrow of String to bad_beef
fn inspect(bad_beef: &String) -> &String {
    dbg!(bad_beef);  // 5. Copy borrow of String to dbg
    return bad_beef; // 6. Copy borrow of String to main
}
fn main() {
    // 1. Move String into bad_beef
    let bad_beef = String::from("Bad Beef!");

    // 2. Borrow String
    // 3. Copy borrow of String to inspect ✅
    // 7. Copy borrow of String to println
    println!("No {}", inspect(&bad_beef));
}
```

Borrow before inspect. [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=70886723e73f0a928ba6588e8860b19a "Rust Playground")

----

# BORROW

```rust
// 4. Copy borrow of String to bad_beef
fn inspect(bad_beef: &String) -> &String {
    dbg!(bad_beef);  // 5. Copy borrow of String to dbg
    return bad_beef; // 6. Copy borrow of String to main
}
fn main() {
    // 1. Borrow String
    // 2. Copy borrow of String to bad_beef ✅
    let bad_beef = &String::from("Bad Beef!");

    // 3. Copy borrow of String to inspect
    // 7. Copy borrow of String to println
    println!("No {}", inspect(bad_beef));
}
```

Borrow on initialisation. [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=91382a1cebebb106e21547bad5ca1b3f "Rust Playground")

---

# REF

```rust
// 3. Copy borrow of String to bad_beef
fn inspect(bad_beef: &String) -> &String {
    dbg!(bad_beef);  // 4. Copy borrow of String to dbg
    return bad_beef; // 5. Copy borrow of String to main
}
fn main() {
    // 1. Move String into bad_beef
    let bad_beef = String::from("Bad Beef!");

    // 2. Move String into inspect 💥
    // 6. Copy borrow of String to println
    println!("No {}", inspect(bad_beef));
}
```

String ≠ &String [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=dea5cddbbb328e8d64dee4a38012fcda "Rust Playground")

----

# REF

```rust
fn inspect(bad_beef: String) -> String {
    // pub fn clone(&self) -> String ⁉️
    dbg!(bad_beef.clone());

    return bad_beef;
}

fn main() {
    let bad_beef = String::from("Bad Beef!");

    println!("No {}", inspect(bad_beef));
}
```


[automatic referencing and dereferencing!][8] [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=caf7de38ca1647b84dc2b82f97409a58 "Rust Playground")

[8]: https://doc.rust-lang.org/book/ch05-03-method-syntax.html#wheres-the---operator "Method Syntax - The Rust Programming Language"

----

# REF

```rust
fn inspect(bad_beef: &str) -> &str {
    dbg!(bad_beef);
    return bad_beef;
}

fn main() {
    // string literal is a string slice
    let bad_beef = "Bad Beef!";

    println!("No {}", inspect(bad_beef));
}
```

String literal [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=0289a0a96657e4ab9047f6a15a9d15b6 "Rust Playground")

----

# REF

```rust
fn inspect(bad_beef: &str) -> &str {
    dbg!(bad_beef);
    return bad_beef;
}

fn main() {
    // a string slice of String
    let bad_beef = &String::from("Bad Beef!")[..];

    println!("No {}", inspect(bad_beef));
}
```

String slice [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=7c459125ff9a9955b06bc33cbd4007a3 "Rust Playground")

----

# REF

```
      ref ─┬─ slice ─┬─ String slice ─── string literal
           │         │
           │         ├─ Vec slice
           │         │
           │         └─ ...
           │
           └─ borrow
```

---

# DEREF

```rust
fn emphasise(bad_beef: &mut String) {
    *bad_beef += "?"; // 1. Deref *bad_beef to mut String
                      // 2. Call String’s add_assign
}

fn main() {
    let mut bad_beef = String::from("Bad Beef!");
    
    emphasise(&mut bad_beef);

    println!("No {}", bad_beef);
}
```

Deref [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=c9e222692d7bb85ae9fd0f633950b206 "Rust Playground")

----

# DEREF

```rust
fn inspect(bad_beef: &str) -> &str {
    dbg!(bad_beef);
    return bad_beef;
}

fn main() {
    let bad_beef = String::from("Bad Beef!");

    // 1. borrow bad_beef as &String
    // 2. deref coerce &String to &str
    // 3. Copy &str to inspect
    println!("No {}", inspect(&bad_beef));
}
```

Deref coercion [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=1dc53c1fcb94872d5f18bab6206b7072 "Rust Playground")

---

# RefCell

```rust
use std::cell::RefCell;

fn emphasise(bad_beef: &RefCell<String>) {
    *bad_beef.borrow_mut() += "?";
}

fn main() {
    let bad_beef = RefCell::new(String::from("Bad Beef!"));
    
    emphasise(&bad_beef);

    println!("No {}", bad_beef.borrow() );
}
```

[interior mutability][9] [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=f1484bb0ee51cbc6267f3f1847462cb1 "Rust Playground")

[9]: https://doc.rust-lang.org/book/ch15-05-interior-mutability.html "RefCell<T> and the Interior Mutability Pattern - The Rust Programming Language"

----

# RefCell

|                    | &mut          | RefCell       |
|--------------------|---------------|---------------|
| Borrow Checker     | Compile Time  | Runtime       |
| Catch Error        | Compiler      | Code Review   |
| Runtime Cost       | Zero          | More          |
| Violation          | Won't compile | Runtime Panic |
| Safe Case Coverage | Less          | More          |

---

# RC

```rust
use std::rc::Rc;
fn inspect(bad_beef: Rc<String>) -> Rc<String> {
    // 1. Clone Rc<String> (shallow copy)
    // 2. Increase strong count
    // 3. Move the clone of Rc into dbg
    // 4. Drop the clone of Rc at the end of dbg
    // 5. Decrease strong count
    dbg!(Rc::clone(&bad_beef));
    return bad_beef;
}
fn main() {
    let bad_beef = Rc::new(String::from("Bad Beef!"));
    println!("No {}", inspect(bad_beef));
}
```

[multiple ownership][10] [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=7d780829bccaf25a4625fb5f2c34de44 "Rust Playground")

[10]: https://doc.rust-lang.org/book/ch15-04-rc.html#using-rct-to-share-data "Rc<T>, the Reference Counted Smart Pointer - The Rust Programming Language"

----

# RC

|                    | No Rc         | Use Rc      |
|--------------------|---------------|-------------|
| Catch Error        | Compiler      | Code Review |
| Runtime Cost       | Zero          | More        |
| Violation          | Won't Compile | Memory Leak |
| Circular Reference | Improbable    | Possible    |

Use [Weak][11] (as in weak reference) to fix circular reference memory leak.

[11]: https://doc.rust-lang.org/book/ch15-06-reference-cycles.html#preventing-reference-cycles-turning-an-rct-into-a-weakt "Reference Cycles Can Leak Memory - The Rust Programming Language"

<!-- --- -->
<!--  -->
<!-- # DROP -->
<!--  -->
<!-- ```rust -->
<!-- ``` -->
<!--  -->
<!-- --- -->
<!--  -->
<!-- # CAST -->
<!--  -->
<!-- ```rust -->
<!-- use std::net::{IpAddr, Ipv4Addr}; -->
<!-- fn print_u32(ipv4_addr: u32) { -->
<!--     println!("{}", ipv4_addr); -->
<!-- } -->
<!-- fn print_ip_addr(ipv4_addr: IpAddr) { -->
<!--     println!("{}", ipv4_addr); -->
<!-- } -->
<!-- fn main() { -->
<!--     let localhost = Ipv4Addr::new(127, 0, 0, 1); -->
<!--  -->
<!--     print_u32(localhost.into()); // Rust knows into u32 -->
<!--     print_ip_addr(localhost.into()); // Rust knows into IpAddr -->
<!-- } -->
<!-- ``` -->
<!--  -->
<!-- Into [▶️](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=3a9814df04c836c4f85839443b7d3370 "Rust Playground") -->

---

# CONCLUSION

Try to say those verbs (copy, move, clone, borrow, ref, deref) when you are typing `=` (copy/move), `&` (borrow/ref), `*` (deref) 

---

# ABOUT ME

If you are looking for a full time and fully remote 10+ years web developer (and 3+ years of team lead) with production experience in *AWS, MongoDB, MySQL, Elixir, Phoenix, JavaScript, TypeScript, React, React Native, NativeBase, OpenAPI, Apollo GraphQL, Docker, Shell*.

Please write to [xqiski@nbox.notif.me](mailto:xqiski@nbox.notif.me)
