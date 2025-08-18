from django.apps import AppConfig

class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'

    def ready(self):
        # This will run when the app is loaded
        try:
            import accounts.signals
        except ImportError:
            pass  # Prevent Pylance error in dev if signals not created yet