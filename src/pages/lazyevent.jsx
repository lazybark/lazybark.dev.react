import {CodeTag, GoFunc, GoInt, GoString} from "../components/codeFormatter";
import {Code, CopyBlock, googlecode} from "react-code-blocks";


export function Lazyevent() {
    return (
        <>
            <div className="hero hero-single route bg-image"
                 style={{"backgroundImage": "url(/assets/img/hero-bg2.jpg)"}}>
                <div className="overlay-mf"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="hero-title mb-4">GO EVENT PROCESSOR</h2>
                            <ol className="breadcrumb d-flex justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active">LazyEvent</li>
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
                                <h2>Description</h2>
                                <p className="text-justify">
                                    LazyEvent - easy to use logger package that can be
                                    customized for almost any app. It treats events as objects with properties that can
                                    be created, modified, and logged (or not). An event is any event during runtime,
                                    and its possible to prepare
                                    record in advance and then use as template. Multiple logging
                                    of the same event will generate unique ID for every log record to avoid ambiguity.
                                    Time of event can be fixed or updated each time the template is logged.
                                </p>
                                <p className="text-justify">Log records can be separated by LogType property in the
                                    event:
                                    only events with suitable type will be passed on to logger. So it's possible
                                    to pass main app flow into one log and error/debug/any other flow into separate
                                    log container.</p>
                                <p className="text-justify">Features:</p>
                                <ul>
                                    <li>event-based logging to several logs via one Log processor</li>
                                    <li>support of any possible custom loggers that have <code><GoFunc
                                        text={"Log"}/>(events.Event, <GoString text={"string"}/>) <GoInt
                                        text={"error"}/></code> and <code><GoFunc
                                        text={"Type()"}/> []events.LogType</code> methods
                                    </li>
                                    <li>support of custom log types that can separately log events using any specific
                                        log schema
                                    </li>
                                    <li>Log processor can pass logging errors to external routine via channel</li>
                                    <li>any event can also be directed to external routine via channel (after being
                                        logged)
                                    </li>
                                    <li>support of panic & os.Exit() right after logging specific event levels (PANIC &
                                        FATAL)
                                    </li>
                                    <li>methods to await output and log error from external functions</li>
                                    <li>custom styling for records with Event.Format property</li>
                                    <li>out of the box support of CLI, text-, JSON- & CSV-file logging (Sentry, Redis &
                                        SQLite will be added in future)
                                    </li>
                                    <li>events are objects that can be stored, passed, modified and logged several times
                                        without creating new instance
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <div className="portfolio-info bs island-block">
                                    <h3>Package info</h3>
                                    <ul>
                                        <li><strong>Language</strong>: Go</li>
                                        <li><strong>Repository</strong>: <a className="anc-link"
                                                                            href="https://github.com/lazybark/lazyevent">GitHub <i
                                            className="bi bi-github"></i></a></li>
                                        <li><strong>Current version</strong>: v3.0.0</li>
                                        <hr/>
                                        <li><strong>Download latest</strong>:</li>
                                    </ul>
                                    <div className="d-grid gap-2">
                                        <a className="btn btn-primary"
                                           href="https://github.com/lazybark/lazyevent/archive/refs/tags/v3.0.0.zip">ZIP <i
                                            className="fa-solid fa-box-archive"></i></a>
                                        <a className="btn btn-primary"
                                           href="https://github.com/lazybark/lazyevent/archive/refs/tags/v3.0.0.tar.gz">TAR.GZ <i
                                            className="fa-solid fa-file-zipper"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className={"portfolio-details"}>
                <div className={"container"}>
                    <div className={"row gy-4"}>
                        <div className={"col-lg-12"}>
                            <h3 id="event">Event</h3>
                            <p className="text-justify">
                                Event is an object that can be returned by a function, created in advance and filled
                                with function output or simply created + logged at in one moment. It has only public
                                parameters:
                            </p>
                            <CopyBlock
                                text={"type Event struct {\n" +
                                    "\tID     string\n" +
                                    "\tLevel  Level\n" +
                                    "\tType   LogType\n" +
                                    "\tSource Source\n" +
                                    "\tTime   time.Time\n" +
                                    "\tText   string\n" +
                                    "\tFormat Format\n" +
                                    "\tTimeFixed bool\n" +
                                    "}"}
                                language={"go"}
                                showLineNumbers={false}
                                theme={googlecode}
                                wrapLines
                                codeBlock
                            />
                            <p className="text-justify">
                                <strong>ID</strong>: unique identifier of event. Log processor will generate ID (using
                                Google's UUID) only if ID was empty at the moment Log() was called. If you wish to use
                                an event
                                as a template, then ID should stay empty. But if you need to use own IDs, then FlushID()
                                can be called to clean it, or SetID() to set new one. ID = "..." is a good, but not very
                                readable option (i think).
                            </p>
                            <p className="text-justify">
                                <strong>Level</strong>: one of predefined levels that determines how critical the event
                                is.
                                Higher is worse. Levels are: INFO, NOTE, WARN, ERR, CRIT, PANIC, FATAL. Events with
                                PANIC
                                and FATAL will cause Log processor to call panic() or exit() after logging.
                            </p>
                            <p className="text-justify">
                                <strong>Type</strong>: type of logger that should be used to log event. Type helps split
                                logs by meaning, so main log will not be populated with debug or verbose info.
                                Predefined
                                types are Any, Main, ErrorFlow, Verbose and Debug. But you can create own types and
                                pass to default or custom loggers.
                            </p>
                            <p className="text-justify">
                                <strong>Source</strong>: text representation of
                                file/function/package or anything else we need to determine the place where
                                event has occurred. It makes error tracing easier and logs look
                                more user-friendly. It does not affect the event itself or logging process at
                                all (for now). Also, Source can be used to prettify usual runtime logs (not just errors)
                                for CLI app.
                            </p>
                            <p className="text-justify">
                                <strong>Time</strong>: time of event creation, which will be replaced with logging time
                                in
                                case TimeFixed in NOT true. Loggers use a copy of event, so Time of original event
                                always
                                stays the same. It's useful to make records about several events that occurred at the
                                same
                                second, but have different text/level/type.
                            </p>
                            <p className="text-justify">
                                <strong>Text</strong>: string that will tell human what happened.
                            </p>
                            <p className="text-justify">
                                <strong>Format</strong>: is a events.Format value that tells logger how to treat
                                specific log entries. It could be a color or some text transformations or any other
                                way of making event stand out. Standard formats only indicate colors for CLI, but you
                                can create custom formats for custom loggers.
                            </p>
                            <p className="text-justify">
                                <strong>TimeFixed</strong>: bool value that tells Log processor to NOT update event time
                                before logging. By default this value is updated to avoid time shift in cases when
                                there is a latency between event creation and logging.
                            </p>
                            <h3 id="create_update">Create & update event</h3>
                            <p className="text-justify">
                                There are two convenient ways to create an event: directly
                                from <code>events</code> package
                                and from an object called <code>EvDefault</code>.
                            </p>
                            <p className="text-justify">
                                The first case is suitable when we
                                have only few events in a function or when all events are more or less standard. Because
                                events created this way would have only default field values, except Level and Text. It
                                can be done
                                by calling <code>events.LEVEL_NAME(<GoString text={`"event text"`}/>)</code> (possible
                                levels: Info, Note, Warning, Error, Critical, Panic, Fatal). <code>Empty()</code> will
                                create an event with INFO level, but empty text.
                            </p>
                            <p className="text-justify">
                                Second case is more convenient when we need to deploy many similar events across the app
                                or function. We can create object of <code>events.EvDefault</code> as a template and
                                then
                                generate events with methods described above. All events will have Source, Type, Format
                                and TimeFixed parameters similar to instance of EvDefault.
                            </p>
                            <CopyBlock
                                text={`ed := events.EvDefault{
\t\tSource: events.EvsMain,
\t\tType:   events.Debug,
\t\tFormat: events.None,
\t}
\ted.Note("Event from default template")`}
                                showLineNumbers={false}
                                codeBlock
                                language="go"
                                theme={googlecode}
                            />
                            <p className="text-justify">
                                We also can put an event together manually by specifying all fields values if there
                                is any need of some custom options.
                            </p>
                            <p className="text-justify">
                                Event updating is a simple process that can happen via manual value setting or
                                default methods: default types and formats can be set by calling methods like
                                e.Verbose() or e.Red(), same goes for levels described above. To set source,
                                you would need to call e.Src(). Text can be changed via e.SetText() and fixing/unfixing
                                time
                                is possible via e.FixTime()/UnFixTime()
                            </p>
                            <h3 id="log">Log event</h3>
                            <p className="text-justify">
                                Event can be logged by calling Log() on lproc.LogProcessor.
                            </p>
                            <p className="text-justify">
                                Processor is created by calling lproc.New(timeFormat string, errChan chan (error),
                                reportErrors bool, la ...logger.ILogger).
                                timeFormat here represents template to format event time in log records. For default
                                loggers
                                it should be one of formats we use with time.Time.Format(), but custom
                                loggers may use any other format. If your logger uses something special in that case,
                                you
                                may want to have only you custom loggers in LogProcessor to avoid problems with default
                                ones.
                                errChan will be used to send errors from loggers in case reportErrors = true.
                            </p>
                            <p className="text-justify">
                                Also LogProcessor has several methods to log errors only and ignore other event levels.
                                LogErrOnly() will drop a log only in case it will receive error or event with ERR level.
                                FatalInCaseErr() will do the same, but only with error or event of FATAL level.
                                PanicInCaseErr() will act accordingly.
                            </p>
                            <p className="text-justify">
                                Code examples can be found below or in main.go on <a className="anc-link"
                                                                                     href="https://github.com/lazybark/lazyevent">GitHub <i
                                className="bi bi-github"></i></a>.
                            </p>
                            <p className="text-justify">
                            </p>
                            <p className="text-justify">
                            </p>
                            <p className="text-justify">
                            </p>

                            <p className="text-justify">
                            </p>
                            <p className="text-justify">
                            </p>
                            <div className="alert alert-primary" role="alert">
                                <p><strong>NOTE</strong></p>
                                <p className="text-justify">
                                    LogErrOnly simply sets types to events. It does not change standard log
                                    sequence. So, if you have a logger that uses events.Any logtype, it will get and log
                                    the
                                    event even if you sent specific logtype to LogErrOnly. That's why doubles may appear
                                    in
                                    case there are several loggers with crossing types.
                                </p>
                                <p className="text-justify">
                                    Another tricky moment: if an event has events.Any logtype it will be logged by all
                                    possible loggers. So it's ok to create strictly specific loggers, but sometimes
                                    use events that are meant for Any - those will be logged to every channel.
                                </p>
                            </div>
                            <div className="alert alert-danger" role="alert">
                                <p><strong>NOTE 2</strong></p>
                                <p className="text-justify">
                                    When creating your own logger, keep in mind that logger may not check
                                    event type. LogProcessor does that, so double-checking will just take
                                    some extra resources.
                                </p>
                            </div>
                            <div className="alert alert-success" role="alert">
                                <p><strong>NOTE 3</strong></p>
                                <p className="text-justify">
                                    Default CLI & plaintext file loggers have <code>pureText</code> directive to
                                    print out pure log event text (without time, id, level, etc. - but with color
                                    formatting in case CLI).
                                </p>
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <div className="accordion-header" id="flush-headingOne">
                                        <div className="gap-2 d-md-flex">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                                Full LazyEvent examples code:
                                            </button>
                                            <a className="btn btn-primary"
                                               href="/files/go-source-code/lazyevent/lazyevent-3.0.0.zip">Download <i
                                                className="fa-solid fa-box-archive"></i></a>
                                        </div>
                                    </div>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                         aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <CopyBlock
                                                text={"package main\n" +
                                                    "\n" +
                                                    "import (\n" +
                                                    "\t\"fmt\"\n" +
                                                    "\t\"log\"\n" +
                                                    "\t\"time\"\n" +
                                                    "\n" +
                                                    "\t\"github.com/lazybark/lazyevent/v2/events\"\n" +
                                                    "\t\"github.com/lazybark/lazyevent/v2/logger\"\n" +
                                                    "\t\"github.com/lazybark/lazyevent/v2/lproc\"\n" +
                                                    ")\n" +
                                                    "\n" +
                                                    "func main() {\n" +
                                                    "\t//Create  loggers (non-default loggers would just need to implement logger.ILogger interface)\n" +
                                                    "\t//CLI logger for all events\n" +
                                                    "\tcli := logger.NewCLI(false, events.Any)\n" +
                                                    "\t//CLI for errors only\n" +
                                                    "\tcli2 := logger.NewCLI(false, events.ErrorFlow)\n" +
                                                    "\t//Text loggers for all event types\n" +
                                                    "\tptl, err := logger.NewPlaintext(\"some.log\", false, false, events.Any)\n" +
                                                    "\tif err != nil {\n" +
                                                    "\t\tlog.Fatal(err)\n" +
                                                    "\t}\n" +
                                                    "\tjs, err := logger.NewJSONtext(\"some.json\", false, events.Any)\n" +
                                                    "\tif err != nil {\n" +
                                                    "\t\tlog.Fatal(err)\n" +
                                                    "\t}\n" +
                                                    "\tcsv, err := logger.NewCSVtext(\"some.csv\", true, events.Any)\n" +
                                                    "\tif err != nil {\n" +
                                                    "\t\tlog.Fatal(err)\n" +
                                                    "\t}\n" +
                                                    "\t//New LogProcessor to rule them all\n" +
                                                    "\tp := lproc.New(\"\", make(chan error), false, cli, cli2, ptl, js, csv)\n" +
                                                    "\n" +
                                                    "\t//Log simple messages with default parameters\n" +
                                                    "\t//.Verbose() here to avoid doubles in CLI output as we have two CLI loggers above\n" +
                                                    "\tp.Log(events.Info(\"Some info\").Verbose())\n" +
                                                    "\tp.Log(events.Warning(\"Some warning\").Verbose())\n" +
                                                    "\tp.Log(events.Error(\"Some error\").Verbose())\n" +
                                                    "\ttime.Sleep(2 * time.Second)\n" +
                                                    "\tp.Log(events.Info(\"Some info2\").Verbose())\n" +
                                                    "\n" +
                                                    "\t//Now add some default event sources\n" +
                                                    "\tp.Log(events.Error(\"Some error\").Src(events.EvsDebug).Verbose())\n" +
                                                    "\tp.Log(events.Error(\"Some error\").Src(events.EvsMain).Verbose())\n" +
                                                    "\t//And create non-default source\n" +
                                                    "\tweird := events.Source{\n" +
                                                    "\t\tText:  \"WEIRD SOURCE\",\n" +
                                                    "\t\tOpen:  \"<\",\n" +
                                                    "\t\tClose: \">\",\n" +
                                                    "\t}\n" +
                                                    "\tp.Log(events.Error(\"That one has come from weird place\").Src(weird).Verbose())\n" +
                                                    "\n" +
                                                    "\t//Using of TimeFixed\n" +
                                                    "\te := events.Error(\"Some error occured\").FixTime().Verbose()\n" +
                                                    "\tp.Log(e)\n" +
                                                    "\ttime.Sleep(2 * time.Second)\n" +
                                                    "\tp.Log(e.SetText(\"And the same moment something else happened!\"))\n" +
                                                    "\n" +
                                                    "\t//Set one of default formats (non-default can be processes only by custom loggers)\n" +
                                                    "\tp.Log(events.Info(\"Red info message\").Red())\n" +
                                                    "\n" +
                                                    "\t//Using LogErrOnly\n" +
                                                    "\t//Should be logged, but will have doubles in CLI\n" +
                                                    "\tp.LogErrOnly(GetErr(), events.ErrorFlow)\n" +
                                                    "\tp.LogErrOnly(GetErrEvent(), events.ErrorFlow)\n" +
                                                    "\t//Should NOT be logged\n" +
                                                    "\tp.LogErrOnly(GetString(), events.ErrorFlow)\n" +
                                                    "\tp.LogErrOnly(GetNonErrEvent(), events.ErrorFlow)\n" +
                                                    "\n" +
                                                    "\ted := events.EvDefault{\n" +
                                                    "\t\tSource: events.EvsMain,\n" +
                                                    "\t\tType:   events.Debug,\n" +
                                                    "\t\tFormat: events.None,\n" +
                                                    "\t}\n" +
                                                    "\tp.Log(ed.Note(\"Event from default template\"))\n" +
                                                    "\n" +
                                                    "}\n" +
                                                    "\n" +
                                                    "func GetErr() error {\n" +
                                                    "\treturn fmt.Errorf(\"well, that's an error\")\n" +
                                                    "}\n" +
                                                    "\n" +
                                                    "func GetErrEvent() events.Event {\n" +
                                                    "\treturn events.Error(\"error event occured!\")\n" +
                                                    "}\n" +
                                                    "\n" +
                                                    "func GetString() string {\n" +
                                                    "\treturn \"well, that's a string\"\n" +
                                                    "}\n" +
                                                    "\n" +
                                                    "func GetNonErrEvent() events.Event {\n" +
                                                    "\treturn events.Warning(\"it's just a warning\")\n" +
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
        </>
    )
}