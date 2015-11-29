/*#pragma strict

private static var instance:DoNotDestroy;
public static function GetInstance() : DoNotDestroy {
    return instance;
}


    function Awake() {
        if (instance != null && instance != this) {
            Destroy(this.gameObject);
            return;
        } else {
            instance = this;
        }
        DontDestroyOnLoad(this.gameObject);
    }*/