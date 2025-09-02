from django.apps import AppConfig

class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'

def ready(self):
    print("🔁 AppConfig ready() executing...")

    try:
        import accounts.signals
        print("✅ accounts.signals loaded")
    except Exception as e:
        print(f"❌ Failed to import accounts.signals: {e}")