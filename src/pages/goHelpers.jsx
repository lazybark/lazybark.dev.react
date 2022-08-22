import {Code as CodeTag} from "../components/codeFormatter";
import {CopyBlock, Code, googlecode} from "react-code-blocks";

export function GoHelpers() {
    return (
        <>
            <div className="hero hero-single route bg-image"
                 style={{"backgroundImage": "url(/assets/img/hero-bg2.jpg)"}}>
                <div className="overlay-mf"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="hero-title mb-4">GO HELPERS</h2>
                            <ol className="breadcrumb d-flex justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Go helpers lib</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle" style={{"marginTop": "1em"}}>
                <section id="general_idea" className="portfolio-details">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-9">
                                <img className="h3em" src="/assets/img/golang-ar21.svg" alt=""/>
                                <img className="h3em" src="/assets/img/github-ar21.svg" alt=""/>
                                <h2>General idea</h2>
                                <p className="text-justify">
                                    Like any developer, I create help code to reuse in different projects and this
                                    lib is the compilation of such cases. So, Helpers is just a tiny lib to make
                                    life with Go easier.
                                </p>
                                <p className="text-justify">
                                    It includes packages:
                                </p>
                                <ul>
                                    <li><a className="anc-link" href="#npt">No-pointer time</a></li>
                                    <li><a className="anc-link" href="#lazy_event">Logger (LazyEvent)</a></li>
                                    <li><a className="anc-link" href="#hasher">Hasher for files, strings and byte
                                        slices</a></li>
                                    <li><a className="anc-link" href="#clf">CLI formatter</a></li>
                                    <li><a className="anc-link" href="#semver">Semantic versioning
                                        implementation</a></li>
                                    <li><a className="anc-link" href="#fsw">Filesystem worker</a></li>
                                    <li><a className="anc-link" href="#http_writer">Mock HTTP writer</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <div className="portfolio-info bs island-block">
                                    <h3>Lib info</h3>
                                    <ul>
                                        <li><strong>Language</strong>: Go</li>
                                        <li><strong>Repository</strong>: <a className="anc-link"
                                                                            href="https://github.com/lazybark/go-helpers">GitHub <i
                                            className="fa-brands fa-github"></i></a></li>
                                        <li><strong>Current version</strong>: v1.4.0</li>
                                        <hr/>
                                        <li><strong>Download latest</strong>:</li>
                                    </ul>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-primary"
                                           href="https://github.com/lazybark/go-helpers/archive/refs/tags/1.4.0.zip">ZIP <i
                                            className="fa-solid fa-box-archive"></i></a>
                                        <a className="btn btn-primary"
                                           href="https://github.com/lazybark/go-helpers/archive/refs/tags/1.4.0.tar.gz">TAR.GZ <i
                                            className="fa-solid fa-file-zipper"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"portfolio-details"}>
                    <div className={"container"}>
                        <div className={"row gy-4"}>
                            <div className={"col-lg-12"}>
                                <h3 id="npt">No-pointer time</h3>
                                <p className="text-justify">NPT is a struct of two fields: seconds and nanoseconds which
                                    can recreate default Go <CodeTag text={"time.Time"}/> struct by
                                    calling <Code
                                        text={`time.Unix(nsec, nsec)`}
                                        showLineNumbers={false}
                                        codeBlock
                                        language="go"
                                        theme={googlecode}
                                    />
                                </p>

                                <p className="text-justify">NPT holds no pointers (default time does
                                    - <CodeTag text={"*Location"}/>) and this makes NPT more memory-friendly due to
                                    reduced
                                    GC
                                    load.</p>
                                <p className="text-justify">The main problem of pointers is that GC could chase them in
                                    memory in some cases and if you have an app that stores lots of time records, it's
                                    performance may be reduced due to that effect. So, if you don't need location data
                                    and your app uses time only internally, you may want to replace it with NPT.</p>
                                <p className="text-justify">Calling <CodeTag text={"Now()"}/> will create a new NPT from
                                    current moment in time:</p>
                                <CopyBlock
                                    text={`t := npt.Now()\nfmt.Println("Now it's:", t.Time())`}
                                    showLineNumbers={false}
                                    codeBlock
                                    language="go"
                                    theme={googlecode}
                                />
                                <p className="text-justify"><code>ToNow()</code> will set internals of NPT to current
                                    moment:</p>
                                <CopyBlock
                                    text={"time.Sleep(2 * time.Second)\nt.ToNow()"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <p className="text-justify"><code>FromTime()</code> will set NPT to specified time value
                                </p>
                                <CopyBlock
                                    text={"t.FromTime(time.Now().Add(time.Hour))\nfmt.Println(\"And now it's:\", t.Time())"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <p className="text-justify"><code>Add()</code> will add specified duration to NPT</p>
                                <CopyBlock
                                    text={"t.Add(time.Hour)\nfmt.Println(\"And now it's:\", t.Time())"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <p className="text-justify"><code>Time()</code> will return time.Time object from NPT
                                    internals</p>
                                <CopyBlock
                                    text={"gt := t.Time()\nfmt.Println(\"And now it's:\", gt)"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <div class="accordion" id="NPT_collapse">
                                    <div class="accordion-item">
                                        <div class="accordion-header" id="headingNPT">
                                            <div class="gap-2 d-md-flex">
                                                <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseNPT"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                    Full NPT examples code:
                                                </button>
                                                <a class="btn btn-primary"
                                                   href="/files/go-source-code/helpers/test-npt.zip">Download <i
                                                    className="fa-solid fa-box-archive"></i></a></div>
                                        </div>
                                        <div id="collapseNPT" class="accordion-collapse collapse"
                                             aria-labelledby="headingOne" data-bs-parent="#NPTcollapse">
                                            <div class="accordion-body">
                                                <CopyBlock
                                                    text={"package main" +
                                                        "\n" +
                                                        "\nimport (" +
                                                        "\n  \"fmt\"" +
                                                        "\n  \"time\"" +
                                                        "\n" +
                                                        "\n  \"github.com/lazybark/go-helpers/npt\"" +
                                                        "\n) " +
                                                        "\n func main() {" +
                                                        "\n  // Calling Now() will create a new NPT from current moment in time" +
                                                        "\n  t := npt.Now()" +
                                                        "\n  fmt.Println(\"Now it's:\", t.Time())" +
                                                        "\n  // ToNow will set internals of NPT to current moment" +
                                                        "\n  time.Sleep(2 * time.Second)" +
                                                        "\n  t.ToNow()" +
                                                        "\n  fmt.Println(\"And now it's:\", t.Time())" +
                                                        "\n  // FromTime() will set NPT to specified time value" +
                                                        "\n  t.FromTime(time.Now().Add(time.Hour))" +
                                                        "\n  fmt.Println(\"And now it's:\", t.Time())" +
                                                        "\n  //Add() will add specified duration to NPT" +
                                                        "\n  t.Add(time.Hour)" +
                                                        "\n  fmt.Println(\"And now it's:\", t.Time())" +
                                                        "\n  //Time() will return time.Time object from NPT internals" +
                                                        "\n  gt := t.Time()fmt.Println(\"And now it's:\", gt)" +
                                                        "\n}"}
                                                    language={"go"}
                                                    showLineNumbers={false}
                                                    theme={googlecode}
                                                    wrapLines
                                                    codeBlock
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 id="lazy_event">Logger (LazyEvent)</h3>
                                <div className="alert alert-danger" role="alert">
                                    <p><strong>DEPRECATION WARNING</strong></p>
                                    <p className="text-justify">Since Helpers v1.1.4 LazyEvent package has its own repo
                                        and will be developed <a href="/lazyevent">here</a>.</p>
                                </div>
                                <p className="text-justify">LazyEvent - easy to use logger package that can be
                                    customized for almost any app.</p>
                                <p className="text-justify">Main features:</p>
                                <ul>
                                    <li>event-based logging to CLI &amp; file</li>
                                    <li>events are objects that can be stored and modified</li>
                                    <li>events have levels and sources</li>
                                    <li>loggers are objects accessed via event processor</li>
                                    <li>colored CLI output</li>
                                    <li>in-memory events log, events are available at any time</li>
                                </ul>
                                <p className="text-justify">Event logging is quite simple:</p>
                                <h6>1. create new processor with desired number of events to keep in chain</h6>
                                <CopyBlock
                                    text={"p := le.NewV1(8)"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <h6>2. add loggers for CLI or console</h6>
                                <CopyBlock
                                    text={"err := p.NewConsole()\n" +
                                        "if err != nil {\n" +
                                        "  log.Fatal(err)\n" +
                                        "}\n" +
                                        "err = p.NewFile(\"log.txt\", true)\n" +
                                        "if err != nil {\n" +
                                        "  log.Fatal(err)\n" +
                                        "}"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <h6>3. create event sources if needed</h6>
                                <div className="alert alert-primary" role="alert">
                                    <p><strong>SOURCE</strong></p>
                                    <p className="text-justify">Source is just a text representation of
                                        file/function/package or anything else we need to determine the place where
                                        event has occured during execution. It makes error tracing easier and logs look
                                        more user-friendly. It does not affect the event itself or logging process at
                                        all (for now).</p>
                                    <p className="text-justify"><code>Source</code> will be added between
                                        event <code>Type</code> and event <code>Text</code>: <kbd>TIME TYPE SOURCE
                                            TEXT</kbd></p>
                                </div>
                                <p className="text-justify">Source parameters are: text, color (for CLI only) and
                                    open/close symbols that will wrap source name in logs.</p>
                                <p className="text-justify">There are some predefined
                                    sources: <code>EvsEmpty</code> (represents no source and will be ignored in
                                    logs), <code>EvsDebug</code> ([DEBUG]) and <code>EvsMain</code> ([MAIN]).</p>
                                <CopyBlock
                                    text={"srcE := p.Source(\"EXTRA\", \"cyan\", \"[\", \"]\")\n" +
                                        "srcS := p.Source(\"SOMESTUFF\", \"red\", \"[\", \"]\")"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <h6>4. create events</h6>
                                <p className="text-justify">It can be done several ways. Call to <code>src.Event(<span
                                    className="go-int"><span className="go-string">*</span>proc</span>, <span
                                    className="go-int">any</span>)</code> will create an event with pre-defined text,
                                    source <code>src</code> and processor <code><span className="go-string">*</span>proc</code> that
                                    will be used to log event in future. All other fields will be default. Calling
                                    to <code>src.Info(<span className="go-int"><span className="go-string">*</span>proc</span>, <span
                                        className="go-int">any</span>)</code> method will create event with defined
                                    source, processor and type (info) - same for any type-like named methods.</p>
                                <p className="text-justify">Full list of types in current version: Info, Note, Warning,
                                    Error, Panic, Critical, Fatal</p>
                                <p className="text-justify">Also we can call to <code>proc.Event(<span
                                    className="go-int">any</span>)</code> or any type-like named methods of processor.
                                    These methods create events with pre-defined text and type, but rest fields are
                                    default.</p>
                                <CopyBlock
                                    text={"e1 := srcE.Event(p, \"Event 1\")\n" +
                                        "e2 := srcS.Info(p, \"Event 2\")\n" +
                                        "e3 := p.Event(\"Event 3\")\n" +
                                        "e4 := p.Warning(\"Event 4\")"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <h6>5. modify events</h6>
                                <p className="text-justify">Before <code>event.Log()</code> is called, event is not
                                    logged and can be modified. It can be modified even after, but it's reasonable to do
                                    so only in case you need to log the event again with new parameters.</p>
                                <p className="text-justify">Modification of text is possible
                                    via <code>Text()</code> &amp; <code>Append()</code> methods. <code>Src()</code> will
                                    change event source and <code>Time()</code> - its time. Type-like named methods will
                                    change event's type. <code>EscapeAnsi()</code> will mark event as ANSI-escaped and
                                    in case passing to a file, all ANSI escape sequences will be deleted from event
                                    text. Two last, <code>ConsoleOnly()</code> and <code>LogfileOnly()</code> will make
                                    loggers ignore event if it's not suitable to logger's type (file or CLI).</p>
                                <div className="alert alert-primary" role="alert">
                                    <p><strong>IMPORTANT</strong></p>
                                    <p className="text-justify">Methods with names ending in <code><span
                                        className="go-string">***</span>Set()</code> are pointer ones. Calling one of
                                        these will change intenals of the Event itself, without return. So, if you need
                                        to construct event in one line (like that: <kbd>p.Error("That's an
                                            error").Src(srcS).BgRed().Log())</kbd>, you must use methods above (without
                                        Set), but if you need to change event internals later, use methods
                                        named <code><span className="go-string">***</span>Set()</code>.</p>
                                </div>
                                <p className="text-justify">The main philosophy of this 'atomized' approach is 'simple
                                    needs - simple methods'. The simpler the project, the less methods it has to call.
                                    No unnecessary actions, like it sometimes happens in some frameworks. And in case
                                    the project needs constant calls to many of those methods at once, it may be
                                    reasonable to create simple wrap to keep code more simple.</p>
                                <p className="text-justify">Example. Errors are always red and logged at the moment of
                                    creation? Just make method <code>LogErr(<span
                                        className="go-int">err</span>)</code> that will call to <code>p.Error(<span
                                        className="go-int">err</span>).BgRed().Log()</code>.</p>
                                <CopyBlock
                                    text={"e1.Append(\" more text\")\n" +
                                        "e2 = e2.Blue()\n" +
                                        "e3.BgGreenSet()\n" +
                                        "e4 = e4.BgCyan().ConsoleOnly().Note()"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <h6>6. log events</h6>
                                <CopyBlock
                                    text={"e1.Log()\n" +
                                        "e2.Log()\n" +
                                        "e3.Log()\n" +
                                        "e4.Log()\n" +
                                        "p.Error(\"That's an error\").Src(srcS).BgRed().Log()"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <h6>7. get chain of last N events</h6>
                                <p className="text-justify">Where N equals p.chainLength: number of events given to
                                    processor at the moment of creation. <code>p.SetChainLength()</code> can change that
                                    number, but length will actually change only after new event is logged.</p>
                                <CopyBlock
                                    text={"fmt.Println(\"Events chain:\")\n" +
                                        "c := *p.EventChain()\n" +
                                        "for _, e := range c {\n" +
                                        "  fmt.Printf(\"%s:%s\\n\", e.Time, e.Text)\n" +
                                        "}\n"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <h6>8. extra features</h6>
                                <p className="text-justify">Set delimeter for event
                                    processor: <code>p.SetDelimeter()</code>.</p>
                                <p className="text-justify">Set event chain length for event
                                    processor: <code>p.SetChainLength()</code>.</p>
                                <p className="text-justify">Check if event type represents
                                    error: <code>e.IsErr()</code> or <code>etype.IsErr()</code>. Rerurns <span
                                        className="go-int">true</span> in case <code>type</code> &gt;
                                    <code>TWarning</code>.</p>
                                <div className="accordion" id="le_collapse">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingle">
                                            <div className="gap-2 d-md-flex">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapsele"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                    Full LazyEvent example code:
                                                </button>
                                                <a className="btn btn-primary"
                                                   href="/files/go-source-code/helpers/test-lazyevent.zip">Download<i
                                                    className="bi bi-file-zip"></i></a></div>
                                        </div>
                                        <div id="collapsele" className="accordion-collapse collapse"
                                             aria-labelledby="headingOne" data-bs-parent="#lecollapse">
                                            <div className="accordion-body">
                                                <CopyBlock
                                                    text={"package main" +
                                                        "\n" +
                                                        "\nimport (" +
                                                        "\n  \"fmt\"" +
                                                        "\n  \"log\"" +
                                                        "\n  \"time\"" +
                                                        "\n" +
                                                        "\n  \"github.com/lazybark/go-helpers/events/le\"" +
                                                        "\n)" +
                                                        "\n" +
                                                        "\nfunc main() {" +
                                                        "\n  //Create new processor with desired number of events to keep in chain" +
                                                        "\n  p := le.NewV1(8)" +
                                                        "\n  //Add loggers for CLI or console" +
                                                        "\n  err := p.NewConsole()" +
                                                        "\n  if err != nil {" +
                                                        "\n    log.Fatal(err)" +
                                                        "\n  }" +
                                                        "\n  err = p.NewFile(\"log.txt\", true)" +
                                                        "\n  if err != nil {" +
                                                        "\n    log.Fatal(err)" +
                                                        "\n  }" +
                                                        "\n  //Create event sources if needed" +
                                                        "\n  srcE := p.Source(\"EXTRA\", \"cyan\", \"[\", \"]\")" +
                                                        "\n  srcS := p.Source(\"SOMESTUFF\", \"red\", \"[\", \"]\")" +
                                                        "\n  //Create events" +
                                                        "\n  e1 := srcE.Event(p, \"Event 1\")" +
                                                        "\n  e2 := srcS.Info(p, \"Event 2\")" +
                                                        "\n  e3 := p.Event(\"Event 3\")" +
                                                        "\n  e4 := p.Warning(\"Event 4\")" +
                                                        "\n  //Modify events" +
                                                        "\n  e1.Append(\" more text\")" +
                                                        "\n  e2 = e2.Blue()\n" +
                                                        "  e3.BgGreenSet()\n" +
                                                        "  e4 = e4.BgCyan().ConsoleOnly().Note()\n" +
                                                        "  //Log events\n" +
                                                        "  e1.Log()\n" +
                                                        "  e2.Log()\n" +
                                                        "  e3.Log()\n" +
                                                        "  e4.Log()\n" +
                                                        "  p.Error(\"That's an error\").Src(srcS).BgRed().Log()\n" +
                                                        "  time.Sleep(2 * time.Second)\n" +
                                                        "  //Get chain of events\n" +
                                                        "  fmt.Println(\"Events chain:\")\n" +
                                                        "  c := *p.EventChain()\n" +
                                                        "  for _, e := range c {\n" +
                                                        "    fmt.Printf(\"%s:%s\\n\", e.Time, e.Text)\n" +
                                                        "  }\n" +
                                                        "}"}
                                                    language={"go"}
                                                    showLineNumbers={false}
                                                    theme={googlecode}
                                                    wrapLines
                                                    codeBlock
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 id="hasher">Hasher</h3>
                                <p className="text-justify">Hasher for files, strings and byte slices. Hash
                                    types: <code>MD5</code>, <code>SHA1</code>, <code>SHA256</code>, <code>SHA512</code>
                                </p>
                                <p className="text-justify">To hash file contents, specify the path in the
                                    function <kbd>hasher.HashFilePath</kbd>, pick a <kbd>hash type</kbd> and set
                                    reading <kbd>block size</kbd> in bytes:</p>
                                <CopyBlock
                                    text={"HASH, err := hasher.HashFilePath(\"example_file\", hasher.SHA256, 8192)\n" +
                                        "  if err != nil {\n" +
                                        "    fmt.Println(err)\n" +
                                        "  }\n" +
                                        "\n" +
                                        "  fmt.Println(HASH)"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <p className="text-justify">Getting hash of strings or byte slices is more simple:</p>
                                <CopyBlock
                                    text={"  //Hash string\n" +
                                        "  s := \"Some string for you\"\n" +
                                        "  fmt.Println(hasher.HashString(s, hasher.SHA256))\n" +
                                        "  fmt.Println(hasher.HashString(s, hasher.MD5))\n" +
                                        "  fmt.Println(hasher.HashString(s, hasher.SHA1))\n" +
                                        "  fmt.Println(hasher.HashString(s, hasher.SHA512))\n" +
                                        "  \n" +
                                        "  //Hash bytes\n" +
                                        "  b := []byte(s)\n" +
                                        "  fmt.Println(hasher.HashBytes(b, hasher.SHA256))\n" +
                                        "  fmt.Println(hasher.HashBytes(b, hasher.MD5))\n" +
                                        "  fmt.Println(hasher.HashBytes(b, hasher.SHA1))\n" +
                                        "  fmt.Println(hasher.HashBytes(b, hasher.SHA512))"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <div className="accordion" id="hasher_collapse">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headinghasher">
                                            <div className="gap-2 d-md-flex">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapsehasher"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                    Full hash examples code:
                                                </button>
                                                <a className="btn btn-primary"
                                                   href="/files/go-source-code/helpers/test-hash.zip">Download<i
                                                    className="bi bi-file-zip"></i></a></div>
                                        </div>
                                        <div id="collapsehasher" className="accordion-collapse collapse"
                                             aria-labelledby="headingOne" data-bs-parent="#hashercollapse">
                                            <div className="accordion-body">
                                                <CopyBlock
                                                    text={"package main\n" +
                                                        "\n" +
                                                        "import (\n" +
                                                        "  \"fmt\"\n" +
                                                        "  \"github.com/lazybark/go-helpers/hasher\"\n" +
                                                        ")\n" +
                                                        "\n" +
                                                        "func main() {\n" +
                                                        "  //Get & print all types of file hash\n" +
                                                        "  SHA256, err := hasher.HashFilePath(\"example_file\", hasher.SHA256, 8192)\n" +
                                                        "  if err != nil {\n" +
                                                        "    fmt.Println(err)\n" +
                                                        "  }\n" +
                                                        "  MD5, err := hasher.HashFilePath(\"example_file\", hasher.MD5, 8192)\n" +
                                                        "  if err != nil {\n" +
                                                        "    fmt.Println(err)\n" +
                                                        "  }\n" +
                                                        "  SHA1, err := hasher.HashFilePath(\"example_file\", hasher.SHA1, 8192)\n" +
                                                        "  if err != nil {\n" +
                                                        "    fmt.Println(err)\n" +
                                                        "  }\n" +
                                                        "  SHA512, err := hasher.HashFilePath(\"example_file\", hasher.SHA512, 8192)\n" +
                                                        "  if err != nil {\n" +
                                                        "    fmt.Println(err)\n" +
                                                        "  }\n" +
                                                        "\n" +
                                                        "  fmt.Println(\"File hashes:\")\n" +
                                                        "  fmt.Println(SHA256)\n" +
                                                        "  fmt.Println(MD5)\n" +
                                                        "  fmt.Println(SHA1)\n" +
                                                        "  fmt.Println(SHA512)\n" +
                                                        "  \n" +
                                                        "  //Hash string\n" +
                                                        "  s := \"Some string for you\"\n" +
                                                        "  fmt.Printf(\"String hashes ('%s'):\\n\", s)\n" +
                                                        "  fmt.Println(hasher.HashString(s, hasher.SHA256))\n" +
                                                        "  fmt.Println(hasher.HashString(s, hasher.MD5))\n" +
                                                        "  fmt.Println(hasher.HashString(s, hasher.SHA1))\n" +
                                                        "  fmt.Println(hasher.HashString(s, hasher.SHA512))\n" +
                                                        "  \n" +
                                                        "  //Hash bytes\n" +
                                                        "  fmt.Println(\"[]byte hashes:\")\n" +
                                                        "  b := []byte(s)\n" +
                                                        "  fmt.Println(hasher.HashBytes(b, hasher.SHA256))\n" +
                                                        "  fmt.Println(hasher.HashBytes(b, hasher.MD5))\n" +
                                                        "  fmt.Println(hasher.HashBytes(b, hasher.SHA1))\n" +
                                                        "  fmt.Println(hasher.HashBytes(b, hasher.SHA512))\n" +
                                                        "}"}
                                                    language={"go"}
                                                    showLineNumbers={false}
                                                    theme={googlecode}
                                                    wrapLines
                                                    codeBlock
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 id="clf">CLI formatter</h3>
                                <p className="text-justify">Simple ANSI escape sequences to format CLI-output.</p>
                                <p className="text-justify">It's also possible to use <code>clf.FNone</code> as default
                                    in external methods that accept or pass on clf formatting directives.</p>
                                <p className="text-justify">It will return just an empty string.</p>
                                <div className="alert alert-primary" role="alert">
                                    <p><strong>WARNING</strong></p>
                                    <span className="text-justify">Colors will not work in standart Windows console. To get colors on Windows (instead of weird ANSI) use Windows Terminal or any other app that supports ANSI escape codes.</span>
                                </div>
                                <div className="accordion" id="clf_collapse">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingclf">
                                            <div className="gap-2 d-md-flex">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseclf"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                    Full formats example code:
                                                </button>
                                                <a className="btn btn-primary"
                                                   href="/files/go-source-code/helpers/test-ansi.zip">Download<i
                                                    className="bi bi-file-zip"></i></a></div>
                                        </div>
                                        <div id="collapseclf" className="accordion-collapse collapse"
                                             aria-labelledby="headingOne" data-bs-parent="#clfcollapse">
                                            <div className="accordion-body">
                                                <CopyBlock
                                                    text={"\n" +
                                                        "package main\n" +
                                                        "\n" +
                                                        "import (\n" +
                                                        "  \"fmt\"\n" +
                                                        "  \"github.com/lazybark/go-helpers/cli/clf\"\n" +
                                                        ")\n" +
                                                        "\n" +
                                                        "func main() {\n" +
                                                        "  fmt.Println(\"Let's make console pretty!\")\n" +
                                                        "  fmt.Println(clf.Red(\"Red text\"))\n" +
                                                        "  fmt.Println(clf.Green(\"Green text\"))\n" +
                                                        "  fmt.Println(clf.Yellow(\"Yellow text\"))\n" +
                                                        "  fmt.Println(clf.Blue(\"Blue text\"))\n" +
                                                        "  fmt.Println(clf.Magenta(\"Magenta text\"))\n" +
                                                        "  fmt.Println(clf.Cyan(\"Cyan text\"))\n" +
                                                        "  fmt.Println(clf.Gray(\"Gray text\"))\n" +
                                                        "  fmt.Println(clf.White(\"White text (ha-ha)\"))\n" +
                                                        "  fmt.Println()\n" +
                                                        "  fmt.Println(clf.BBlack(\"Text with black background\"))\n" +
                                                        "  fmt.Println(clf.BRed(\"Text with red background\"))\n" +
                                                        "  fmt.Println(clf.BYellow(\"Text with yellow background\"))\n" +
                                                        "  fmt.Println(clf.BBlue(\"Text with blue background\"))\n" +
                                                        "  fmt.Println(clf.BMagenta(\"Text with magenta background\"))\n" +
                                                        "  fmt.Println(clf.BCyan(\"Text with cyan background\"))\n" +
                                                        "  fmt.Println(clf.BWhite(\"Text with white background\"))\n" +
                                                        "  fmt.Println()\n" +
                                                        "  fmt.Println(clf.FBold(\"Text with bold formatting\"))\n" +
                                                        "  fmt.Println(clf.FUnderline(\"Text with underline formatting\"))\n" +
                                                        "  fmt.Println(clf.FBlink(\"Text with blinking formatting\"))\n" +
                                                        "  fmt.Println()\n" +
                                                        "  fmt.Println(clf.Yellow(clf.BBlue(\"Text can \" + clf.FReverse(\"be reversed\") + clf.FUnReverse((\" and dropped back, \")+\"but both FReverse & FUnReverse need to have clf.Reset() at the end.\"+clf.Reset()))))\n" +
                                                        "  fmt.Println()\n" +
                                                        "  fmt.Println(\"Combining\", clf.FBold(clf.BBlue(\"formats is even more fun!\")))\n" +
                                                        "  fmt.Println()\n" +
                                                        "  fmt.Println(\"Manually\", clf.BgMagenta.String()+\"injected\"+clf.Reset(), clf.CRed.String()+\"formatting\"+clf.Reset(), \"also possible\")\n" +
                                                        "}\n"}
                                                    language={"go"}
                                                    showLineNumbers={false}
                                                    theme={googlecode}
                                                    wrapLines
                                                    codeBlock
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 id="semver">Semver</h3>
                                <p className="text-justify">Semver is a simple package that provides tools to set and
                                    compare versions of anything in the world according to <a target="_blank"
                                                                                              href="https://semver.org/">Semantic
                                        versioning 2.0.0</a>.</p>
                                <b><p className="text-justify">Methods:</p></b>
                                <ul>
                                    <li><code>v.IsStable()</code> to check if v is a stable version by
                                        rules: <code>Major</code> must be &gt; 0, <code>ReleaseNote</code> must be
                                        empty, and <code>Stable <span className="go-string">==</span> <span
                                            className="go-int">true</span></code>. Using that, we can define unstable
                                        version even if it should be stable according to SemVer. It's not a desirable
                                        practice, but can be useful in some cases.
                                    </li>
                                    <li><code>v.IsHigher(c Ver)</code> returns true in case <code>v</code> is a higher
                                        version than <code>c</code> by SemVer rules.
                                    </li>
                                    <li><code>v.IsEqual(c Ver)</code> returns true in case <code>v <span
                                        className="go-string">==</span> c</code> by SemVer rules.
                                    </li>
                                    <li><code>v.IsCompatible(c Ver)</code> returns true in case <code>v</code> is
                                        compatible with c according to SemVer rules (has same <code>Major</code> part),
                                        but includes <code>Comp</code> and <code>InComp</code> slices. It means that if
                                        c is in v's <code>Comp</code> slice, <code>v.IsCompatible(<span
                                            className="go-int">c</span>)</code> will always be true. In
                                        case <code>c</code> is in v's <code>InComp</code>, it will always be false.
                                        Unless <code>v</code> and <code>c</code> are the same version, of cource.
                                    </li>
                                </ul>
                                <b><p className="text-justify">Model:</p></b>
                                <CopyBlock
                                    text={"type Ver struct {\n" +
                                        "\tMajor uint\n" +
                                        "\tMinor uint\n" +
                                        "\tPatch uint\n" +
                                        "\n" +
                                        "\t//ReleaseNote defines comment to release, e.g. \"alpha\", \"beta.2\"\n" +
                                        "\tReleaseNote string\n" +
                                        "\n" +
                                        "\t//BuildMetadata represents commit hash or any comment to current build\n" +
                                        "\tBuildMetadata string\n" +
                                        "\n" +
                                        "\t//Stable is true in case current app ver works exactly as expecterd\n" +
                                        "\t//Correct way to ckeck Stable is via Ver.IsStable()\n" +
                                        "\tStable bool\n" +
                                        "\n" +
                                        "\t//Comp holds list of versions that are totally compatible with current\n" +
                                        "\tComp []Ver\n" +
                                        "\n" +
                                        "\t//InComp holds list of versions that are totally incompatible with current\n" +
                                        "\tInComp []Ver\n" +
                                        "}"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <div className="accordion" id="semver_collapse">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingsemver">
                                            <div className="gap-2 d-md-flex">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapsesemver"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                    Full Semver examples code:
                                                </button>
                                                <a className="btn btn-primary"
                                                   href="/files/go-source-code/helpers/test-semver.zip">Download<i
                                                    className="bi bi-file-zip"></i></a></div>
                                        </div>
                                        <div id="collapsesemver" className="accordion-collapse collapse"
                                             aria-labelledby="headingOne" data-bs-parent="#semvercollapse">
                                            <div className="accordion-body">
                                                <CopyBlock
                                                    text={"package main\n" +
                                                        "\n" +
                                                        "import (\n" +
                                                        "  \"fmt\"\n" +
                                                        "\n" +
                                                        "  \"github.com/lazybark/go-helpers/semver\"\n" +
                                                        ")\n" +
                                                        "\n" +
                                                        "func main() {\n" +
                                                        "  v011 := semver.Ver{\n" +
                                                        "    Major:         0,\n" +
                                                        "    Minor:         1,\n" +
                                                        "    Patch:         1,\n" +
                                                        "    ReleaseNote:   \"\",\n" +
                                                        "    BuildMetadata: \"\",\n" +
                                                        "    Stable:        true,\n" +
                                                        "  }\n" +
                                                        "  fmt.Printf(\"Is %s stable? %v\\n\", v011, v011.IsStable())\n" +
                                                        "\n" +
                                                        "  v111 := semver.Ver{\n" +
                                                        "    Major:         1,\n" +
                                                        "    Minor:         1,\n" +
                                                        "    Patch:         1,\n" +
                                                        "    ReleaseNote:   \"\",\n" +
                                                        "    BuildMetadata: \"\",\n" +
                                                        "    Stable:        true,\n" +
                                                        "  }\n" +
                                                        "  fmt.Printf(\"Is %s stable? %v\\n\", v111, v111.IsStable())\n" +
                                                        "  v111.Stable = false\n" +
                                                        "  fmt.Printf(\"And now is %s stable? %v\\n\", v111, v111.IsStable())\n" +
                                                        "\n" +
                                                        "  v111_rn := semver.Ver{\n" +
                                                        "    Major:         1,\n" +
                                                        "    Minor:         1,\n" +
                                                        "    Patch:         1,\n" +
                                                        "    ReleaseNote:   \"alpha.3\",\n" +
                                                        "    BuildMetadata: \"\",\n" +
                                                        "    Stable:        true,\n" +
                                                        "  }\n" +
                                                        "  fmt.Printf(\"Is %s stable? %v\\n\", v111_rn, v111_rn.IsStable())\n" +
                                                        "\n" +
                                                        "  v111_rn_bm := semver.Ver{\n" +
                                                        "    Major:         1,\n" +
                                                        "    Minor:         1,\n" +
                                                        "    Patch:         1,\n" +
                                                        "    ReleaseNote:   \"alpha.4\",\n" +
                                                        "    BuildMetadata: \"j32edbshdi3ws\",\n" +
                                                        "    Stable:        true,\n" +
                                                        "  }\n" +
                                                        "  fmt.Printf(\"Is %s stable? %v\\n\", v111_rn_bm, v111_rn_bm.IsStable())\n" +
                                                        "\n" +
                                                        "  fmt.Printf(\"Is %s > %s? %v\\n\", v111_rn_bm, v111_rn, v111_rn_bm.IsHigher(v111_rn))\n" +
                                                        "  fmt.Printf(\"Is %s > %s? %v\\n\", v111_rn, v111, v111_rn.IsHigher(v111))\n" +
                                                        "  fmt.Printf(\"Is %s > %s? %v\\n\", v111, v011, v111.IsHigher(v011))\n" +
                                                        "}\n"}
                                                    language={"go"}
                                                    showLineNumbers={false}
                                                    theme={googlecode}
                                                    wrapLines
                                                    codeBlock
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 id="fsw">Filesystem worker</h3>
                                <p className="text-justify">Right now fsw is just a simple method to create files along
                                    with all dirs in path. Will be more functions here later.</p>
                                <p className="text-justify">Second parameter, <code>bool</code>, will truncate the file
                                    in case <code>true</code>.</p>
                                <CopyBlock
                                    text={"f, err := fsw.MakePathToFile(path, true)\n" +
                                        "if err != nil {\n" +
                                        "    fmt.Println(err)\n" +
                                        "}\n"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />

                                <h3 id="http_writer">Mock HTTP writer</h3>
                                <p className="text-justify">MockHTTPWriter is meant to implement http.ResponseWriter
                                    interface.
                                    It's useful in various test cases with RESTful API methods that do not return any
                                    value to external function but write output directly to HTTP client.</p>
                                <p className="text-justify">Typical use case is create mock writer, pass it to
                                    a function that writes to HTTP (<code>w.WriteHeader()</code>, <code>w.Write()</code>).
                                    Then read MockHTTPWriter fields
                                    to get exact function output.</p>
                                <p className="text-justify">The most useful method here will be <code>w.AssertAndFlush(t
                                    *testing.T, assertWith interface{})</code>:
                                    it uses <code>assert.Equal()</code> to check if current buffer data equals to given
                                    example and then cleans buffer.
                                </p>
                                <p className="text-justify"><code>MockHTTPWriter</code> has public only public fields:
                                </p>
                                <CopyBlock
                                    text={"type MockHTTPWriter struct {\n" +
                                        "\tData       *[]byte\n" +
                                        "\tStatusCode *int\n" +
                                        "\tHeaderData http.Header\n" +
                                        "}"}
                                    language={"go"}
                                    showLineNumbers={false}
                                    theme={googlecode}
                                    wrapLines
                                    codeBlock
                                />
                                <p className="text-justify">The simplest way to use is:
                                </p>
                                <div className="accordion" id="MHHTP_collapse">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingMHHTP">
                                            <div className="gap-2 d-md-flex">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseMHHTP"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                    Full NPT examples code:
                                                </button>
                                                <a className="btn btn-primary"
                                                   href="/files/go-source-code/helpers/mock_http_writer.zip">Download <i
                                                    className="fa-solid fa-box-archive"></i></a></div>
                                        </div>
                                        <div id="collapseMHHTP" className="accordion-collapse collapse"
                                             aria-labelledby="headingOne" data-bs-parent="#MHHTPcollapse">
                                            <div className="accordion-body">
                                                <CopyBlock
                                                    text={"package main\n" +
                                                        "\n" +
                                                        "import (\n" +
                                                        "\t\"fmt\"\n" +
                                                        "\n" +
                                                        "\t\"github.com/lazybark/go-helpers/mock\"\n" +
                                                        ")\n" +
                                                        "\n" +
                                                        "func main() {\n" +
                                                        "\tw := mock.New()\n" +
                                                        "\n" +
                                                        "\tw.HeaderData[\"one\"] = []string{\"one\", \"one\"}\n" +
                                                        "\tfmt.Println(\"Header is: \", w.HeaderData)\n" +
                                                        "\tw.Write([]byte{'s', 'o', 'm', 'e', '_', 'd', 'a', 't', 'a'})\n" +
                                                        "\tfmt.Println(\"Data is: \", *w.Data)\n" +
                                                        "\tw.WriteHeader(1)\n" +
                                                        "\tfmt.Println(\"Code is: \", *w.StatusCode)\n" +
                                                        "\tw.Flush()\n" +
                                                        "\tfmt.Println(\"Data is: \", *w.Data)\n" +
                                                        "}\n"}
                                                    language={"go"}
                                                    showLineNumbers={false}
                                                    theme={googlecode}
                                                    wrapLines
                                                    codeBlock
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}